//breeds
var express = require('express');
var router = express.Router();
// var Breed  = require('../models/breed');
var mongoDbConnection = require('./connection');

/* GET list all breeds on system. */
router.get('/', function(req, res, next) {
  mongoDbConnection(function(databaseConnection) {
    databaseConnection.collection('breed', function(error, collection) {
      collection.find().toArray(function(error, results) {
        res.send(results);
      });
    });
  });
});

module.exports = router;
