const mysql = require('mysql2');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Saibaba123456@',
    database:'northwind'
});
 con.connect((err)=>{
    if(err){
        console.log("error occured while connecting to database");
        return;
    }
    else{
        const query = "SELECT * FROM orders";
        con.query(query,(err,results)=>{
            if(err){
                console.log("failed to load data from table");
            }
            else{
                console.log("result",results);
                con.end();
            }
        })
    }
})