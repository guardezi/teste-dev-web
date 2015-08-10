'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
    var buscar_cachorros = function () {
        $http.get('https://charliedogs.herokuapp.com/dogs/')
            .success(function (data, status, headers, config) {
                $scope.dogs = angular.fromJson(data);
            }).error(function (data, status, headers, config) {
                console.log('Não com scesso');
            });
    };

    buscar_cachorros();
}]);