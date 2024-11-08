var fs = require('fs');
var data = "You are learning node writestream function";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write('My name is chaitanya chougule','UTF8');
writeStream.end();
writeStream.on('finish',function(){
    console.log("write is completed");
    
})
console.log("Program ended")