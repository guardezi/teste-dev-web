/**
 * Created by guardezi on 07/08/15.
 */

var mongoDbConnection = require('./connection');
var cloudinary = require('cloudinary');

var fs = require('fs');

cloudinary.config({
    cloud_name: 'hwr0nwo83',
    api_key: '129885417761768',
    api_secret: 'xb909yce4NHq9Ix3s5dawISIDYY'
});

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



dogs.save = function(dog,callback){
    var imgPath = '../public/images/dog.jpg';
    cloudinary.uploader.upload(imgPath, function(result) {

        dog.img_url = result.url;

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('dog', function (error, collection) {
                collection.insert(dog);
                if (error)throw  new error(error);
                callback(dog);
                return;
            });
        });
    });
};

module.exports = dogs;

