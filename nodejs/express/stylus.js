var express = require("express");
var app = express();
var path = require("path");

    app.use(require("stylus").middleware(process.argv[3])||__dirname+'/public');
    app.use(express.static(process.argv[3]||path.join(__dirname,"public")));

app.listen(process.argv[2]);

/*
var express = require('express')
    var app = express()
    
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    
    
    app.listen(process.argv[2])
*/
