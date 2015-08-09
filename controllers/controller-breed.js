/**
 * Created by guardezi on 07/08/15.
 */
var mongoDbConnection = require('./connection');


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

module.exports = breed;