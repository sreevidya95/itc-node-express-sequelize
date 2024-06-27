const mysql = require('mysql2');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Saibaba123456@',
    database:'northwind'
})
conn.connect((err)=>{
    if(err){
        console.log("failed to connect to database");
        return;
    }
    else{
        const query = "INSERT INTO territories VALUES(515001,'Tollywood',3)";
        conn.query(query,(err,results)=>{
         if(err){
            console.log("problem in inserting data");
            return;
         }
         else{
            console.log(results);
            conn.end();
         }
        })
    }
})