'use strict';

angular.module('myApp.dog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dog/:id', {
        templateUrl: 'dog/dog.html',
        controller: 'dogCtrl'
    });
}])

.controller('dogCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
    var buscar_cachorros_porID = function () {
//         $http.get('https://charliedogs.herokuapp.com/dogs/id/'+$routeParams.id)
        $http.get('http://127.0.0.1:5000/dogs/id/'+$routeParams.id)
            .success(function (data, status, headers, config) {
                $scope.dog = data;
                console.log($scope.dog);
            }).error(function (data, status, headers, config) {
                console.log('Não com scesso');
            });
        };
        buscar_cachorros_porID();
}]);