/**
 * Created by guardezi on 07/08/15.
 */
var mongoDbConnection = require('./connection');
var ObjectId = require('mongodb').ObjectID;


var breed = new Object();

/*retrieve all breeds  */
breed.getAll = function (callback) {
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('breed', function(error, collection) {
            collection.find().toArray(function(error, results) {
                if (error) throw new Error(error);
                callback(results);
                return;
            });
        });
    });
};

breed.saveBreed = function(breed, callback){
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('breed', function(error, collection) {
            collection.insert(breed,function(err,records){
                if(err) throw err;
                callback(records);
                return;
            });
        });
    });
};

/*retrieve all breed with contains the name */
breed.getByName = function(name, callback){
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('breed', function(error, collection) {
            var regex = new RegExp(["", name, ""].join(""), "i");
            collection.find({"name":regex}).toArray(function(error, results) {
                if (error) throw new Error(error);
                callback(results);
                return;
            });
        });
    });
};

/*retrieve all breed with contains the name */
breed.getById = function(id, callback){
    mongoDbConnection(function(databaseConnection) {
        databaseConnection.collection('breed', function(error, collection) {
            o_id = new ObjectId(id);
            collection.findOne({"_id":o_id}, function(error, results) {
                if (error) throw new Error(error);

                callback(results);
                return;
            });
        });
    });
};

module.exports = breed;