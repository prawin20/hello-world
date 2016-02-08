var http = require("http");
var bl = require("bl");
var datas=[];
var index=0;
for(var i=2;i<process.argv.length;i++){
    callfunc(i);
}
function callfunc(i) {

    var url=process.argv[i];
    
http.get(url,function(res){
    res.pipe(bl(function(err,data){
     datas[i]=data.toString();
     index++;
     if(index==3){
         datas.forEach(function(d){
console.log(d);    
});
     }
    }));
    
});
}
/*
var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
  */

