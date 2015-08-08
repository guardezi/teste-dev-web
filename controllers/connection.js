/**
 * Created by guardezi on 07/08/15.
 */
//connection
//var Db = require('mongodb').Db;
//var Connection = require('mongodb').Connection;
//var Server = require('mongodb').Server;
//the MongoDB connection
var connectionInstance;

var mongodb = require('mongodb');

module.exports = function(callback) {
    //if already we have a connection, don't connect to database again
    if (connectionInstance) {
        callback(connectionInstance);
        return;
    }

    var uri = 'mongodb://192.168.100.3:27017/charliedog';
    mongodb.MongoClient.connect(uri, function(err, db) {

        if(err) throw err;
        db.open(function(error,databaseConnection){
           if(error) throw new Error(error);
           connectionInstance = databaseConnection;
            callback(databaseConnection);
        });
    });

    //var db = new Db('heroku_sqgtk2p9', new Server("ornitorrinko:nodejs@ds031903.mongolab.com", "31903", { auto_reconnect: true }));
    //db.open(function(error, databaseConnection) {
    //    if (error) throw new Error(error);
    //    connectionInstance = databaseConnection;
    //    callback(databaseConnection);
    //});
};