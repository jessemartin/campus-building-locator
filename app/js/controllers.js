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
    '$http',
    function ($scope, $routeParams, $http) {
      var query = $routeParams.query;
      if (query) {
        $scope.query = query;
        $http.get('api/buildings.json').success(function (data) {
          var buildings = data.buildings;
          var building = buildings[query];
          var results = [];
          if (building) {
            results.push(building);
          }
          $scope.results = results;
        });
      }
    }
  ]
);
