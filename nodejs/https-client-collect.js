var http = require("http");
var url= process.argv[2];
var bl = require("bl");

http.get(url,function(res){
    res.pipe(bl(function(err,data){
     console.log(data.length);
     console.log(data.toString());
    }));
    
});
/*
var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
*/
