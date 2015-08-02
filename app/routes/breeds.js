//breeds
var express = require('express');
var router = express.Router();
var Breed  = require('../models/breed');

/* GET list all breeds on system. */
router.get('/', function(req, res, next) {
  console.log('outro teste');
  var breed = new Breed();
  res.send(breed.list());
});

/*GET list of all breeds */
// router.get('/', function(req, res, next) {
//   console.log(req.url);
//   res.send('[]');
// });

module.exports = router;
