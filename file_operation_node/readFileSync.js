const fs = require('fs');

console.log("Readind Synchronously");

data=fs.readFileSync('input.text');
console.log(data.toString());

console.log("Asynchronous");
fs.readFile('input.text',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("Asynchronous read:"+ data.toString());
    console.log("read operation completed");
})

