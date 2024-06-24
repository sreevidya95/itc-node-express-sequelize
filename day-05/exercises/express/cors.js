const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
 origin:"http://localhost:301"
}
   
));
app.get("/",cors(),(req,res)=>{
    res.send("cors enabled")
})

