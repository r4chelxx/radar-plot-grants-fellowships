// Candidate-only triage: no automatic catalog writes or eligibility assertions.
const fs=require('node:fs'),vm=require('node:vm');
const ctx={window:{RADAR_PARTS:{}}};vm.createContext(ctx);
for(const file of ['data/opportunities.js','data/datasets.js','data/tools.js']) vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
const normalize=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const known=[...ctx.window.RADAR_PARTS.opportunities.map(x=>({category:'opportunities',name:x.title,url:x.rules})),...ctx.window.RADAR_PARTS.datasets.map(x=>({category:'datasets',name:x.name,url:x.url})),...ctx.window.RADAR_PARTS.tools.map(x=>({category:'tools',name:x.name,url:x.url}))];
const intake=JSON.parse(fs.readFileSync(process.argv[2]||'intake/source-review.json','utf8'));
const report={generatedAt:new Date().toISOString(),policy:'Candidate discovery only; all records require human verification before publication',coverage:intake.coverage||null,results:[]};
for(const source of intake.results||[]){
 const title=source.title||'';
 const normalized=normalize(title);
 const duplicates=known.filter(x=>normalize(x.name)===normalized || (x.url&&source.url&&x.url.replace(/\/$/,'')===source.url.replace(/\/$/,'')));
 let classification='needs-review';
 if(source.accessStatus!=='accessible')classification='inaccessible';
 else if(duplicates.length)classification='catalog-match';
 else if(!title)classification='not-extracted';
 report.results.push({source:source.name,url:source.url,classification,possibleMatches:duplicates.slice(0,5),candidateTitle:title||null,deadline:null,eligibility:null,editoriallyVerified:false});
}
fs.mkdirSync('intake',{recursive:true});
fs.writeFileSync('intake/candidate-triage.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({checked:report.results.length,matches:report.results.filter(x=>x.classification==='catalog-match').length,unverified:report.results.filter(x=>x.classification==='needs-review').length}));
