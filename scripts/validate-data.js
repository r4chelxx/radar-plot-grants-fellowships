#!/usr/bin/env node
const fs=require("fs"),vm=require("vm"),path=require("path");
const files=["data/opportunities.js","data/stories.js","data/datasets.js","data/sources.js","data/changelog.js"];
let errors=[],warnings=[];
function duplicateKeys(file,src){
  const objectRx=/\{[^{}]*\}/g;
  for(const m of src.matchAll(objectRx)){
    const keys=[...m[0].matchAll(/(?:^|[,\{])\s*([A-Za-z_$][\w$]*)\s*:/g)].map(x=>x[1]);
    const dup=[...new Set(keys.filter((k,i)=>keys.indexOf(k)!==i))];
    if(dup.length) errors.push(file+": duplicate key(s) "+dup.join(", ")+" near "+m[0].slice(0,90));
  }
}
const ctx={window:{}};ctx.window.RADAR_PARTS={};vm.createContext(ctx);
for(const file of files){
  const src=fs.readFileSync(path.join(process.cwd(),file),"utf8");
  duplicateKeys(file,src);
  try{vm.runInContext(src,ctx,{filename:file})}catch(e){errors.push(file+": JavaScript parse/runtime error: "+e.message)}
}
const D=ctx.window.RADAR_PARTS, opps=D.opportunities||[], stories=D.stories||[], datasets=D.datasets||[];
const storyIds=new Set(stories.map(x=>x.id)), seen=new Set(), dateRx=/^\d{4}-\d{2}-\d{2}$/;
for(const o of opps){
  if(!o.id) errors.push("opportunity: missing id"); else if(seen.has(o.id)) errors.push("opportunity "+o.id+": duplicate id"); else seen.add(o.id);
  for(const k of ["title","org","type","scope","status","eligibility"]) if(!o[k]) errors.push("opportunity "+(o.id||"?")+": missing "+k);
  if(typeof o.fit!=="number"||o.fit<0||o.fit>10) errors.push("opportunity "+o.id+": fit outside 0–10");
  if(!o.rules||!/^https?:\/\//.test(o.rules)) errors.push("opportunity "+o.id+": invalid official source");
  for(const k of ["deadline","opens","verified"]) if(o[k]&&!dateRx.test(o[k])) errors.push("opportunity "+o.id+": invalid "+k);
  for(const s of o.story||[]) if(!storyIds.has(s)) errors.push("opportunity "+o.id+": unknown story "+s);
  if(!o.summary) warnings.push("opportunity "+o.id+": missing editorial summary");
}
const sourceNames=new Set();
for(const s of D.sources||[]){
  if(!s.name) errors.push("source: missing name"); else if(sourceNames.has(s.name)) errors.push("source "+s.name+": duplicate name"); else sourceNames.add(s.name);
  for(const k of ["type","scope","priority","cadence","category"]) if(!s[k]) errors.push("source "+(s.name||"?")+": missing "+k);
  if(s.url&&!/^https?:\/\//.test(s.url)) errors.push("source "+s.name+": invalid URL");
  if(!["diária","semanal","quinzenal","mensal"].includes(s.cadence)) errors.push("source "+s.name+": invalid cadence "+s.cadence);
}
const dseen=new Set();
for(const d of datasets){
  if(!d.id) errors.push("dataset: missing id"); else if(dseen.has(d.id)) errors.push("dataset "+d.id+": duplicate id"); else dseen.add(d.id);
  if(!d.url||!/^https?:\/\//.test(d.url)) errors.push("dataset "+d.id+": invalid URL");
  for(const s of d.story||[]) if(!storyIds.has(s)) errors.push("dataset "+d.id+": unknown story "+s);
  for(const k of ["period","granularity","geoUnit","docs","lastChecked"]) if(!d[k]) warnings.push("dataset "+d.id+": pending "+k);
}
console.log("Radar PLOT validation");
console.log("Checked:",opps.length,"opportunities,",stories.length,"stories,",datasets.length,"data records");
console.log("Errors:",errors.length,"Warnings:",warnings.length);
if(warnings.length) console.log("\nWARNINGS\n"+warnings.map(x=>" - "+x).join("\n"));
if(errors.length){console.error("\nERRORS\n"+errors.map(x=>" - "+x).join("\n"));process.exit(1)}
