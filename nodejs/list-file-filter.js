var file = require("fs");
var filePath = require("path");
file.readdir(process.argv[2],function(err,list){
    for(var i=0;i<list.length;i++){
        if(filePath.extname(list[i])=== '.'+process.argv[3]){
            console.log(list[i]);
        }
    }
    
});
/*
 var fs = require('fs'); 
     var path = require('path');  
       
     fs.readdir(process.argv[2], function (err, list) {  
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file);  
       })  
     });  */
