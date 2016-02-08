var net = require("net");
var server = net.createServer(function(socket){
    var date = new Date();
    
    var data = date.getFullYear()+"-"+addZero(date.getMonth()+1)+"-"+addZero(date.getDate())+" "+addZero(date.getHours())+":"+date.getMinutes()+"\n";
    socket.end(data);
});
server.listen(process.argv[2]);
function addZero(val){
    return val<10?"0"+val:val;
}

/*

var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
*/
