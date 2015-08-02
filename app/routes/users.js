var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('outro teste');
  res.send('respondendo com um recurso');
});

router.get('/teste', function(req, res, next) {
  console.log(req.url);
  res.send('[]');
});

module.exports = router;
