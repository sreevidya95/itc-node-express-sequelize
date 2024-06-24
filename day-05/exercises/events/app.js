const express = require('express');
const bodyParser = require('body-parser');
let events=[
    
        {id:1,title:"jagannath yathra", data:"2024-06-30"},
        {id:2,title:"ganesh chavithi" ,date:"2024-08-02"}
    
]
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get("/events",(req,res)=>{
    res.status(200).json(events);
})
app.get("/events/:id",(req,res)=>{
   let event = events.find(b=>b.id === parseInt(req.params.id));
   console.log(event);
    if(!event){
        res.status(404).send("The book doesnt exists")
    }
    else{
        res.status(200).json(event)
    }
});
app.post('/events',(req,res)=>{
    const {title,date}=req.body;
    console.log(req.body);
    const event = {
        id:events.length+1,
        title,
        date
    }
    events.push(event);
    res.status(201).send(event);
})
app.delete("/events/:id",(req,res)=>{
    const index = events.findIndex(e=>e.id === parseInt(req.params.id));
    console.log(index);
    if(index===-1){
        res.status(404).send("doesnt exists");
    }
    events.splice(index,1);
    res.status(204).send("event deleted successfully");
})
app.put("/events/:id",(req,res)=>{
    let event = events.find(e=>e.id===parseInt(req.params.id));
    if(!event){
        res.status(404).send("doesnt exists");
    }
    event.title= req.body.title;
    event.date = req.body.date;
    res.status(200).send(event);
})
app.listen(3000,()=>{
    console.log("listening");
})
