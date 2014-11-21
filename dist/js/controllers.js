var campusBuildingLocatorControllers = angular.module(
  'campusBuildingLocatorControllers',
  []
);

campusBuildingLocatorControllers.controller(
  'SearchCtrl',
  [
    '$scope',
    '$http',
    '$location',
    function ($scope, $http, $location) {
      $scope.searchForBuilding = function (buildingQuery) {
        if (!buildingQuery) {
          return;
        }
        var url = '/map/' + buildingQuery;
        $location.path(url);
      };
    }
  ]
);

campusBuildingLocatorControllers.controller(
  'MapCtrl',
  [
    '$scope',
    '$routeParams',
    function ($scope, $routeParams) {
      var query = $routeParams.query;
      $scope.query = query;
    }
  ]
);
