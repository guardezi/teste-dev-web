var express = require('express');
var router = express.Router();
var userController = require('../controllers/controller-user');

//userController = new userController();
/* GET users listing. */
router.get('/', function(req, res, next) {
  userController.getUsers('ola',function(data,err){
    if(err){
      res.send('ERRO');
    }
      res.json(data);
  });

});

router.get( '/login' , function(req,res,next){
  res.send('resposta de um login');
});

module.exports = router;
