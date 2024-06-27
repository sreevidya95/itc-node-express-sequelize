const mysql = require('mysql2');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Saibaba123456@',
    database:'test'
});
con.connect((err)=>{
    if(err){
        console.log("Error occured while conncting database");
        return;
    }
    else{
        console.log("connected successfully");
        return;
        con.end();
    }
})