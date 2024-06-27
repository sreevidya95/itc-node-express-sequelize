const mysql = require('mysql2');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Saibaba123456@',
    database:'northwind'
});
con.connect((err)=>{
    if(err){
        console.log("error in db");
        return;
    }
    else{
        const query = "UPDATE territories set TerritoryID = 515006 where TerritoryID = 515001";
        con.query(query,(err,res)=>{
            if(err){
                console.log("error in updating");
            }
            else{
                console.log(res);
                con.end();
            }
        })
    }
    
    
})