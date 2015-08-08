/**
 * Created by guardezi on 07/08/15.
 */
//dogs
var express = require('express');
var mongoDbConnection = require('./connection');

var user= new Object();

user.getUsers = function(oi,callback){
    console.log(oi);
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


module.exports = user;