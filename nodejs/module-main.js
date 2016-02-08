var module = require("./module.js");
module(process.argv[2],process.argv[3],function(err,files){
    if(err){
        console.log(err);
        return;
    }
    for(var i=0;i<files.length;i++){
        console.log(files[i]);
    }
    
});

/*

var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
*/
