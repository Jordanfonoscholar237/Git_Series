const http = require('http');
const server = require('child_process').spawn(process.execPath, ['server.js'], { stdio: ['ignore', 'pipe', 'pipe'] });
function get(path){return new Promise((resolve,reject)=>{http.get(`http://127.0.0.1:${process.env.PORT||3000}${path}`,res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>res.statusCode<400?resolve(d):reject(new Error(`${path} ${res.statusCode}`)));}).on('error',reject);});}
setTimeout(async()=>{try{await get('/api/health'); await get('/'); console.log('Smoke test passed'); process.exit(0);}catch(e){console.error(e); process.exit(1);}finally{server.kill();}},900);
