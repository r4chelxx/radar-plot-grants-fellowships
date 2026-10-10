// Public-source lead history only. Never ingest Gmail messages or private identifiers.
const fs=require('node:fs');
const crypto=require('node:crypto');
const triage=JSON.parse(fs.readFileSync('intake/candidate-triage.json','utf8'));
const path='intake/lead-history-previous.json';
const loaded=fs.existsSync(path);
const previous=loaded?JSON.parse(fs.readFileSync(path,'utf8')):{schemaVersion:1,updatedAt:null,leads:{}};
if(previous.schemaVersion!==1||!previous.leads||Array.isArray(previous.leads))throw new Error('Unsupported history state');
function canonical(raw){
 const u=new URL(raw);
 if(!['http:','https:'].includes(u.protocol))throw new Error('Unsupported URL');
 u.hash='';u.hostname=u.hostname.toLowerCase();
 for(const key of [...u.searchParams.keys()])if(/^utm_|^(fbclid|gclid|mc_cid|mc_eid)$/i.test(key))u.searchParams.delete(key);
 u.searchParams.sort();
 if(u.pathname.length>1)u.pathname=u.pathname.replace(/\/+$/,'');
 return u.toString();
}
const now=new Date().toISOString(),next={schemaVersion:1,updatedAt:now,leads:{...previous.leads}};
const delta={new:[],returning:[],changed:[],invalid:[],stateLoaded:loaded};
const currentIds=new Set();
for(const lead of triage.leads||[]){
 let url;try{url=canonical(lead.url)}catch{delta.invalid.push({url:String(lead.url||'').slice(0,200)});continue}
 const id=crypto.createHash('sha256').update(url).digest('hex');
 if(currentIds.has(id))continue;
 currentIds.add(id);
 const old=next.leads[id];
 const item={url,title:lead.title,source:lead.source,category:lead.category,classification:lead.classification,
  firstSeen:old?.firstSeen||now,lastSeen:now,seenCount:(old?.seenCount||0)+1,
  editorialStatus:old?.editorialStatus||'unverified'};
 next.leads[id]=item;
 if(!old)delta.new.push({id,url,title:lead.title,category:lead.category});
 else{
  delta.returning.push({id,url});
  if(old.title!==item.title||old.category!==item.category||old.classification!==item.classification)
   delta.changed.push({id,url,previous:{title:old.title,category:old.category,classification:old.classification},current:{title:item.title,category:item.category,classification:item.classification}});
 }
}
const summary={generatedAt:now,stateLoaded:loaded,storedTotal:Object.keys(next.leads).length,seenThisRun:currentIds.size,new:delta.new.length,returning:delta.returning.length,changed:delta.changed.length,invalid:delta.invalid.length,
 policy:'Only public web links. New means unseen in persisted history, not a new or eligible opportunity. No Gmail data.'};
fs.writeFileSync('intake/lead-history-next.json',JSON.stringify(next,null,2)+'\n');
fs.writeFileSync('intake/lead-history-delta.json',JSON.stringify({summary,delta},null,2)+'\n');
console.log(JSON.stringify(summary));
