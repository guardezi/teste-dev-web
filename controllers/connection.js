/**
 * Created by guardezi on 07/08/15.
 */
var mongodb = require('mongodb');
var connectionInstance;

var uri = 'mongodb://heroku_q2370wr0:f94q2v5e8mvv676fl22nd1lvqq@ds031223.mongolab.com:31223/heroku_q2370wr0';


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