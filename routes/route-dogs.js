/**
 * Created by guardezi on 07/08/15.
 */
var express = require('express');
var router = express.Router();
var dogController = require('../controllers/controller-dogs');
var breedController = require('../controllers/controller-breed');


/* GET dogs listing. */
router.get('/', function(req, res, next) {
    dogController.getAll(function(data,err){
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
        dogController.getByBreed(data,function(data,err){
            if(err){
                res.send('ERRO');
            }
            res.send(data);
        });
    });
});

router.get( '/id/:id?' , function(req,res,next){
    var id = req.params.id;
    dogController.getById(id,function(data,err){
        if(err){
            res.send('ERRO');
        }
        breedController.getById(data.breed_id,function(breed,err) {
            if (err) {
                res.send('ERRO');
            }
            data.breed = breed;
            res.send(data);
        });
    });
});

router.post('/',function(req,res,next){
    var dog  = req.body;
    dogController.save(dog,function(data,err){
        if(err){
            res.send('erro');
        }
        res.send(data);
    });
});

module.exports = router;

