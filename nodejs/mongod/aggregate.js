 var mongo = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/learnyoumongo";
    mongo.connect(url, function(err, db) {
        if(err) throw err;
       db.collection("prices").aggregate([{$match:{size:process.argv[2]}},{$group:{_id:'average',average:{$avg:'$price'}}}]).toArray(function(err,results){
           if(err) throw err;
           console.log(Number(results[0].average).toFixed(2));
           db.close();
       });
    });
/*
 var mongo = require('mongodb').MongoClient
    var size = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices')
      prices.aggregate([
        { $match: {
          size: size
        }}
      , { $group: {
          _id: 'total'
        , total: {
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        if (err) throw err
        if (!results.length) {
          throw new Error('No results found')
        }
        var o = results[0]
        console.log(Number(o.total).toFixed(2))
        db.close()
      })
    })
  */  
