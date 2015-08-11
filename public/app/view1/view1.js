'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  $routeProvider.when('/view1/porte/:porte', {
      templateUrl: 'view1/view1.html',
      controller: 'porteCtrl'
  })
  $routeProvider.when('/view1/valor/:min/:max', {
      templateUrl: 'view1/view1.html',
      controller: 'valorCtrl'
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
}])
.controller('porteCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
    var buscar_cachorros = function () {
        //$http.get('https://charliedogs.herokuapp.com/dogs/porte/'+$routeParams.porte)
        $http.get('http://127.0.0.1:5000/dogs/porte/'+$routeParams.porte)
            .success(function (data, status, headers, config) {
                $scope.dogs = angular.fromJson(data);
            }).error(function (data, status, headers, config) {
                console.log('Não com scesso');
            });
    };

    buscar_cachorros();
}])
.controller('valorCtrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {

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