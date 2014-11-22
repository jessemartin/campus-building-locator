var campusBuildingLocatorControllers = angular.module(
  'campusBuildingLocatorControllers',
  []
);

campusBuildingLocatorControllers.controller(
  'SearchCtrl',
  [
    '$scope',
    '$location',
    function ($scope, $location) {
      $scope.searchForBuilding = function (buildingQuery) {
        var url = '/map';
        if (buildingQuery) {
          url += '/' + buildingQuery;
        }
        $location.path(url);
      }
    }
  ]
);

campusBuildingLocatorControllers.controller(
  'MapCtrl',
  [
    '$scope',
    '$routeParams',
    function ($scope, $routeParams) {
      $scope.query = $routeParams.query;
    }
  ]
);
