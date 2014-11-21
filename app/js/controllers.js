var campusBuildingLocatorControllers = angular.module('campusBuildingLocatorControllers', []);

campusBuildingLocatorControllers.controller('SearchCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $scope.orderProp = 'age';
  }]);

// campusBuildingLocatorControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);