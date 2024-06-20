const {readFile,writeFile}  = require('fs');
readFile('./input.txt',"utf8",(err,data)=>{
    writeFile('./output.txt',data.toUpperCase(),(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("added the file and written the file successfully");
        }
    })
})
