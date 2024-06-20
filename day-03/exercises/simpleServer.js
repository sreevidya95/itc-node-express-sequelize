const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("Welcome to my node js server");
    }
    else if(req.url=='/about'){
        res.end("ABOUT US")
    }
    else if(req.url=='/contact'){
        res.end("Contact us");
    }
    else{
        res.end("404 Page not found");
    }

});
const PORT = 3000
server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})