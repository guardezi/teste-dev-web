//breed model
function Breed(){}

Breed.prototype.list = function () {
    //list all breeds on system
    //substituir pelo metodo que vai trazer do DB
    return [{"description":"labrador"},{"description":"poodle"}];
};

module.exports = Breed;