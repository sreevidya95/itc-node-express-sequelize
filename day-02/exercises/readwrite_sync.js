const {readFileSync,writeFileSync} = require('fs');
const data = readFileSync("./input.txt","utf8");
writeFileSync('./outputsync.txt',data.toUpperCase());
