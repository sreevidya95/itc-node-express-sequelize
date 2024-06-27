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
        const query = 'DELETE FROM territories where TerritoryID = 515006';
        con.query(query,(err,res)=>{
            if(err){
                console.log("err in connectiong table");
            }
            else{
                console.log(res);
                con.end();
            }
        })
    }
});