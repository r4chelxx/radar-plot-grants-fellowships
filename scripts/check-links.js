#!/usr/bin/env node
const fs=require("fs"),vm=require("vm"),path=require("path");
const files=["data/opportunities.js","data/datasets.js","data/sources.js"];
const ctx={window:{RADAR_PARTS:{}}};vm.createContext(ctx);
for(const file of files)vm.runInContext(fs.readFileSync(path.join(process.cwd(),file),"utf8"),ctx,{filename:file});
const D=ctx.window.RADAR_PARTS, rows=[];
for(const x of D.opportunities||[])if(x.rules)rows.push({type:"opportunity",id:x.id||x.title,url:x.rules});
for(const x of D.datasets||[])if(x?.url)rows.push({type:"dataset",id:x.id||x.name,url:x.url});
for(const x of D.sources||[])if(x?.url)rows.push({type:"source",id:x.name,url:x.url});
const unique=[...new Map(rows.map(x=>[x.url,x])).values()];
const results=[];
async function check(x){
  const ctrl=new AbortController(),timer=setTimeout(()=>ctrl.abort(),15000);
  try{
    const r=await fetch(x.url,{method:"GET",redirect:"follow",signal:ctrl.signal,headers:{"user-agent":"Mozilla/5.0 Radar-PLOT-Link-Audit/1.0","accept":"text/html,application/json;q=0.9,*/*;q=0.8"}});
    clearTimeout(timer);
    let cls=r.status>=200&&r.status<400?"ok":[401,403,405,406,429].includes(r.status)?"blocked":r.status===404||r.status===410?"broken":r.status>=500?"server":"warning";
    return {...x,status:r.status,finalUrl:r.url,class:cls};
  }catch(e){clearTimeout(timer);return {...x,status:null,finalUrl:null,class:"network",error:e.name+":"+e.message}}
}
async function main(){
  const concurrency=8;
  for(let i=0;i<unique.length;i+=concurrency)results.push(...await Promise.all(unique.slice(i,i+concurrency).map(check)));
  const counts={};for(const r of results)counts[r.class]=(counts[r.class]||0)+1;
  console.log("Radar PLOT link audit");console.log("Unique URLs:",unique.length,counts);
  for(const cls of ["broken","server","network","warning","blocked"]){
    const list=results.filter(x=>x.class===cls);if(list.length){console.log("\n"+cls.toUpperCase());for(const x of list)console.log(" -",x.type,x.id,"=>",x.status||x.error,x.url,x.finalUrl&&x.finalUrl!==x.url?"-> "+x.finalUrl:"")}
  }
  fs.writeFileSync("link-audit.json",JSON.stringify({checkedAt:new Date().toISOString(),counts,results},null,2));
  if(results.some(x=>x.class==="broken"))process.exitCode=1;
}
main();