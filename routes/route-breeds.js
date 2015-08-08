/**
 * Created by guardezi on 07/08/15.
 */
var express = require('express');
var router = express.Router();
var breedController = require('../controllers/controller-breed');


/* GET breeds listing. */
router.get('/', function(req, res, next) {
    breedController.getAll(function(data,err){
        if(err){
            res.send('ERRO');
        }
        res.send(data);
    });

});

router.get( '/:name?' , function(req,res,next){
    var breed = req.params.name;
    breedController.getByName(breed,function(data,err){
        if(err){
            res.send('ERRO');
        }
        res.send(data);
    });
});

module.exports = router;
