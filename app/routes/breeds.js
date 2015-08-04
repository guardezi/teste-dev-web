//breeds
var express = require('express');
var router = express.Router();
var mongoDbConnection = require('./connection');

/* GET list all breeds */
router.get('/', function(req, res, next) {
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('breed', function(error, collection) {
      collection.find().toArray(function(error, results) {
        res.send(results);
      });
    });
  });
});

/* POST insert new breed */
router.post('/', function(req, res, next) {
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('breed', function(error, collection) {
      console.log('req', req);
      res.send(req.body);
      collection.insert(req.body);
    });
  });
});

/* GET specifi breed */
router.get('/:name?', function(req, res, next) {
  var breed = req.params.name;
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('breed', function(error, collection) {
      var regex = new RegExp(["^", breed, "$"].join(""), "i");
      collection.find({"name":regex}).toArray(function(error, results) {
        res.send(results);
      });
    });
  });
});


module.exports = router;
