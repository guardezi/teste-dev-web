// user model

function User(login, password){
    this.login = login;
    this.password = password;
}

user.prototype.login = function (login, password) {
    //substituir pela logica que busca um login e senha no banco
    if(login == 'admin' && password == 'admin'){
        this.token = 'token';
        return this.token;
    }else {
        throw new Error("usuario ou senha invalidos");
    }    
};

module.exports = User;