
var file = require("fs");
var string = file.readFile(process.argv[2],function(err,data){
    if(err){
        throw err;
    }
var lineCount = data.toString().split("\n").length-1;
console.log(lineCount);
});

/* var fs = require('fs');  
     var file = process.argv[2];  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) can also be used  
       var lines = contents.toString().split('\n').length - 1  ;
       console.log(lines) ; 
     })  */
