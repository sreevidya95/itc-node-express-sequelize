const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/hello/:name",(req,res)=>{
    const name = req.params.name;
     res.send(`Hello ${name}`)
});
app.listen(3000,()=>{
    console.log("listening");
})