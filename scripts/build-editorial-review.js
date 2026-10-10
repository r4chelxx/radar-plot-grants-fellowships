// Editorial review queue derived from evidence. Never marks a candidate verified.
const fs=require('node:fs');
const triage=JSON.parse(fs.readFileSync('intake/candidate-triage.json','utf8'));
const evidence=JSON.parse(fs.readFileSync('intake/lead-evidence.json','utf8'));
const byUrl=new Map((evidence.results||[]).map(x=>[x.url,x]));
const candidates=(triage.leads||[]).filter(x=>x.classification==='needs-editorial-review').map(x=>{
 const ev=byUrl.get(x.url);
 const checks={
  primarySourceVerified:false,
  deadlineVerified:false,
  eligibilityVerified:false,
  duplicateReviewed:false,
  editorialApproval:false
 };
 const missing=Object.entries(checks).filter(([,v])=>!v).map(([k])=>k);
 return {id:Buffer.from(x.url).toString('base64url').slice(0,64),category:x.category,source:x.source,title:x.title,url:x.url,pageStatus:ev?.pageStatus||'not-inspected',pageTitle:ev?.pageTitle||null,dateMentionsUnclassified:ev?.dateMentionsUnclassified||[],checks,missing,publicationReady:false};
});
const counts={opportunities:0,datasets:0,tools:0,uncategorized:0};
for(const x of candidates)counts[x.category]=(counts[x.category]||0)+1;
const out={generatedAt:new Date().toISOString(),policy:'Manual verification required. No candidate automatically qualifies for publication.',counts,candidates};
fs.writeFileSync('intake/editorial-review.json',JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify({candidates:candidates.length,counts}));
