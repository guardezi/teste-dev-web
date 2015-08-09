/**
 * Created by guardezi on 07/08/15.
 */
var mongodb = require('mongodb');
var connectionInstance;

var uri = 'mongodb://guardezi:nodejs@ds031213.mongolab.com:31213/heroku_c030497n';


module.exports = function(callback) {
    //if already we have a connection, don't connect to database again
    if (connectionInstance) {
        callback(connectionInstance);
        return;
    }
    mongodb.MongoClient.connect(uri, function(err, db) {
        if(err) throw err;
        connectionInstance = db;
        callback(connectionInstance);
    });
};