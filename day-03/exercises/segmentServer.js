const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true);
    const segments = parsedUrl.pathname.split('/').filter(segment => segment);
    console.log("segments",segments);
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Check the server console to see the path segments!')
})
server.listen(3000,()=>{
    console.log("listening...")
});