var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('outro teste');
  res.send('respondendo com um recurso');
});

router.post('/login', function(req, res, next) {
    console.log('login: ', req.data);
    var request = req.data;
    user = request.user;



  console.log(req.url);
  res.send('[]');
});

module.exports = router;
