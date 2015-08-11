var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send();
    res.send(__dirname+'/');
});

router.get('/admin', function(req, res, next) {
    //res.send();
    res.send(__dirname+'/admin');
});

module.exports = router;
