var campusBuildingLocatorControllers = angular.module(
  'campusBuildingLocatorControllers',
  []
);
function searchByLocation ($location) {
  return function (buildingQuery) {
    if (!buildingQuery) {
      return;
    }
    var url = '/map/' + buildingQuery;
    $location.path(url);
  }
}
campusBuildingLocatorControllers.controller(
  'SearchCtrl',
  [
    '$scope',
    '$http',
    '$location',
    function ($scope, $http, $location) {
      $scope.searchForBuilding = searchByLocation($location);
    }
  ]
);

campusBuildingLocatorControllers.controller(
  'MapCtrl',
  [
    '$scope',
    '$routeParams',
    '$location',
    function ($scope, $routeParams, $location) {
      $scope.searchForBuilding = searchByLocation($location);
      $scope.query = $routeParams.query;
    }
  ]
);
