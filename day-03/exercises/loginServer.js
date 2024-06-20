const http = require('http');
const server = http.createServer(function (req, res) {
    var jsonString = '';
    if (req.method == 'POST' && req.url=="/login" ) {
        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            if(jsonString){
                const body = JSON.parse(jsonString);
                if(body.hasOwnProperty('username')&& body.hasOwnProperty('password')){
                    res.end("Login Successful")
                }
                else{
                    res.end("invalid username and password");
                }
            }
            else{
                res.end("enter username and password")
            }
            
        });
    }
    if(req.method=="PUT" && req.url=='/update'){
        req.on('data',(data)=>{
            jsonString+=data;
        })
        req.on("end",()=>{
            if(jsonString){
                if(JSON.parse(jsonString).hasOwnProperty('username')){
                    res.end("User updated Successfully")
                }
                else{
                    res.end("Operation failed invalid user");
                }
            }
            else{
                res.end("Invalid operation");
            }
        })
    }
    if(req.url=='/delete',req.method=="DELETE"){
        req.on('data',(data)=>{
            jsonString+=data;
        });
        req.on("end",()=>{
            if(jsonString){
                if(JSON.parse(jsonString).hasOwnProperty('username')){
                    res.end("User Deleted Successfully");
                }
                else{
                    res.end("Operation Failed!! invalid user")
                }
            }
            else{
                res.send("enter the username to perform operation")
            }
        })
    }
})
     

server.listen(3000,()=>{
    console.log("listening to port 3000");
})