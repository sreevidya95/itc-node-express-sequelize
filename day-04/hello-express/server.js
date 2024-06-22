const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}))
server.get("/users",(req,res)=>{
    res.send("GET Request to home page")
});
server.post("/users",(req,res)=>{
    console.log(req.body)
    res.send("POST request to home page");
})
server.put("/users/:id",(req,res)=>{
    res.send(`PUT request to the user ${req.params.id}`);
})
server.delete("/users/:id",(req,res)=>{
    res.send(`DELETE request to the user ${req.params.id}`);
})
server.listen(3001,()=>{
    console.log("listening")
})