'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
   console.log('oooi',$routeParams.id);
   //$scope.dog = new Object();
   var buscar_cachorros_porID = function () {
      $http.get('https://charliedogs.herokuapp.com/dogs/id/'+$routeParams.id)
      .success(function (data, status, headers, config) {
        $scope.dog = data;
        console.log($scope.dog);
      }).error(function (data, status, headers, config) {
        console.log('Não com scesso');
      });
   };

    buscar_cachorros_porID();

}]);