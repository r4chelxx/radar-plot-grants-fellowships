// Daily source discovery: records leads for editorial verification, never publishes unverified opportunities.
const fs = require('node:fs');
const crypto = require('node:crypto');
const https = require('node:https');
const text = fs.readFileSync('data/sources.js','utf8');
const sources = [...text.matchAll(/"name"\s*:\s*"([^"]+)"[\s\S]*?"url"\s*:\s*"(https?:[^"]+)"/g)]
  .map(x=>({name:x[1],url:x[2]}));
const limit = Number(process.env.SOURCE_LIMIT || 15);
const unique = [...new Map(sources.map(s=>[s.url,s])).values()].slice(0,limit);
async function inspect(s) {
  const controller = new AbortController();
  const timer = setTimeout(()=>controller.abort(),12000);
  try {
    const response = await fetch(s.url,{signal:controller.signal,headers:{'user-agent':'RadarPLOT-monitor/1.0'}});
    const body = (await response.text()).slice(0,100000);
    const title = (body.match(/<title[^>]*>([^<]{3,200})<\/title>/i)||[])[1] || '';
    return {name:s.name,url:s.url,httpStatus:response.status,title:title.replace(/\s+/g,' ').trim(),fingerprint:crypto.createHash('sha256').update(body).digest('hex').slice(0,16),checkedAt:new Date().toISOString(),reviewRequired:true};
  } catch(error) {
    return {name:s.name,url:s.url,error:String(error),checkedAt:new Date().toISOString(),reviewRequired:true};
  } finally {clearTimeout(timer);}
}
(async()=>{
  const results=[];
  for (const s of unique) results.push(await inspect(s));
  fs.mkdirSync('intake',{recursive:true});
  fs.writeFileSync('intake/source-review.json',JSON.stringify({note:'Leads only: no opportunities or deadlines verified',results},null,2)+'\n');
  console.log('Sources inspected:',results.length);
})().catch(e=>{console.error(e);process.exitCode=1});
