var process = require('process') ;
console.log("Node.js Version:",process.version);
console.log("platform",process.platform);
console.log("Process Id",process.pid);
const myProcess = ()=>{
    console.log(process.memoryUsage());
}
setInterval(myProcess,5*1000);