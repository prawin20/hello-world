var http = require("http");
var url = require("url");

var server = http.createServer(function(request,response){
    var urlData = url.parse(request.url,true);
    var json="";
   if(urlData.pathname==="/api/parsetime"){
       var inputDate=urlData.query.iso;
       var jDate=new Date(inputDate);
       json={"hour":jDate.getHours(),"minute":jDate.getMinutes(),"second":jDate.getSeconds()};
   }
   if(urlData.pathname==="/api/unixtime"){
       var inputDate=urlData.query.iso;
       var jDate=new Date(inputDate);
       json={"unixtime":jDate.getTime()};
   }
 response.writeHead(200,{'content-type':'application/json'});
 response.end(JSON.stringify(json));
});
server.listen(process.argv[2]);
/*
var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  */
