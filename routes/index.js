var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send();
    res.send(__dirname+'/index.html');
});

router.get('/admin/', function(req, res, next) {
    //res.send();
    res.send(__dirname+'/public/admin/index.html');
});

module.exports = router;
