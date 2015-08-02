// user.test.js
var User = require('../user');

module.exports = function(){
  setUp: function(callback){
    this.admin = new User('admin','admin');
    this.user = new User('user','user');
    callback();
  },
  deveFazerLogin: function(test){
    this.admin = new User('admin','admin');
    this.admin.login(this.admin.login,this.admin.password);
    test.done();
  },
  naoDeveFazerLogin: function(test) {
    test.throws(function() {
        this.user.login(this.user.login, this.user.password);
    },Error,"usuario ou senha invalidos");
    test.done();
  },
  tearDown: function (callback) {
    this.admin = undefined;
    this.user = undefined;
  }
};