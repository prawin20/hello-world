 var mongo = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/learnyoumongo";
 var objects = {firstName:process.argv[2],lastName:process.argv[3]};
    mongo.connect(url, function(err, db) {
        if(err) throw err;
       db.collection('docs').insert(objects,function(err,data){
           if(err) throw err;
           console.log(JSON.stringify(objects));
           db.close();
       });
    });
    
/*
var mongo = require('mongodb').MongoClient
    
    var firstName = process.argv[2]
    var lastName = process.argv[3]
    var doc = {
      firstName: firstName
    , lastName: lastName
    }
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var collection = db.collection('docs')
      collection.insert(doc, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(doc))
        db.close()
      })
    })
  */  
