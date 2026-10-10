const crypto=require('node:crypto');
function canonical(raw){
 const u=new URL(raw);
 if(!['http:','https:'].includes(u.protocol))throw new Error('Unsupported URL');
 u.hash='';u.hostname=u.hostname.toLowerCase();
 for(const key of [...u.searchParams.keys()])if(/^utm_|^(fbclid|gclid|mc_cid|mc_eid)$/i.test(key))u.searchParams.delete(key);
 u.searchParams.sort();
 if(u.pathname.length>1)u.pathname=u.pathname.replace(/\\/+$/,'');
 return u.toString();
}
function identity(raw){const url=canonical(raw);return {url,id:crypto.createHash('sha256').update(url).digest('hex')};}
module.exports={canonical,identity};
