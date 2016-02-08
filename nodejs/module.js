module.exports=function(dir,filter,callback){
var file = require("fs");
var filePath = require("path");
var files=[];
file.readdir(dir,function(err,list){
    if(err){
        return callback(err);
    }
    for(var i=0;i<list.length;i++){
        if(filePath.extname(list[i])=== '.'+process.argv[3]){
            files.push(list[i]);
        }
    }
    return callback(null,files);
});

};

/*
var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }   
*/
