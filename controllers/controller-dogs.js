/**
 * Created by guardezi on 07/08/15.
 */

var mongoDbConnection = require('./connection');
var ObjectId = require('mongodb').ObjectID;



var dogs = new Object();

/*retrieve all dogs  */
dogs.getAll = function (callback) {
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('dog', function(error, collection) {
            collection.find().toArray(function(error, results) {
                if (error) throw new Error(error);
                callback(results);
                return;
            });
        });
    });
};

/*retrieve all dogs available by breed  */
dogs.getByBreed = function(name, callback){
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('dog', function(error, collection) {
            var regex = new RegExp(["^", name[0]._id, "$"].join(""), "i");
            collection.find({"breed_id":regex}).toArray(function(error, results) {
                if (error) throw new Error(error);
                callback(results);
                return;
            });
        });
    });
};

/* retrieve do by id */
dogs.getById = function(id, callback){
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('dog', function(error, collection) {
            o_id = new ObjectId(id);
            collection.find({"_id":o_id}).toArray(function(error, results) {
                if (error) throw new Error(error);
                callback(results);
                return;
            });
        });
    });
};


dogs.save = function(dog,callback){
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('dog', function (error, collection) {
            collection.insert(dog);
            if (error)throw  new error(error);
            callback(dog);
            return;
        });
    });
};

module.exports = dogs;

