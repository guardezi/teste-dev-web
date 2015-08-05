//dogs
var express = require('express');
var dogs = express.Router();
var mongoDbConnection = require('./connection');

/* GET list all dogs */
dogs.get('/', function(req, res, next) {
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('dog', function(error, collection) {
      collection.find().toArray(function(error, results) {
        res.send(results);
    });
  });
});
});

/* POST insert new dog */
dogs.post('/', function(req, res, next) {
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('dog', function(error, collection) {
      console.log('req', req);
      res.send(req.body);
      collection.insert(req.body);
  });
});
});

/* GET specific breed */


module.exports = dogs;
