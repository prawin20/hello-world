var express = require("express");
var app = express();
app.put('/message/:id', function(req, res){
    var val=require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex');
      res.end(val);
});
   

app.listen(process.argv[2]);

/*
 var express = require('express')
    var app = express()
    
    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })
    
    app.listen(process.argv[2])
*/
