// Publication monitor: verifies HTTP availability and the deployed changelog.
// This does NOT claim that new opportunities have been researched or published.
const fs = require('node:fs');
const base = (process.env.RADAR_URL || 'https://r4chelxx.github.io/radar-plot-grants-fellowships/').replace(/\/$/, '/');
const changelog = fs.readFileSync('data/changelog.js', 'utf8');
const today = new Date().toISOString().slice(0, 10);
const dates = [...changelog.matchAll(/"date"\s*:\s*"(20\d{2}-\d{2}-\d{2})"/g)].map(m => m[1]).sort().reverse();
const latest = dates[0];
if (!latest) throw new Error('No dated changelog entries found');
async function get(path) {
  const url = base + path + '?monitor=' + Date.now();
  const response = await fetch(url, {signal: AbortSignal.timeout(20000), cache:'no-store'});
  if (!response.ok) throw new Error(url + ' HTTP ' + response.status);
  return response.text();
}
(async () => {
  const [index, remote] = await Promise.all([get('index.html'), get('data/changelog.js')]);
  if (!index.includes('app.js')) throw new Error('Pages index lacks app.js');
  if (remote !== changelog) throw new Error('Pages changelog differs from main');
  const ageDays = Math.floor((Date.parse(today) - Date.parse(latest)) / 86400000);
  console.log(JSON.stringify({latestChangelogDate:latest, ageDays, pages:base, deployed:true}));
  if (ageDays > 1) console.warn('Editorial review recommended: changelog is ' + ageDays + ' days old; no automatic publication is inferred');
})().catch(error => {console.error(error); process.exitCode=1;});
