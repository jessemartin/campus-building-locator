var campusBuildingLocatorControllers = angular.module(
  'campusBuildingLocatorControllers',
  []
);

campusBuildingLocatorControllers.controller(
  'SearchCtrl',
  [
    '$scope',
    '$location',
    'ConfigurationService',
    function ($scope, $location, ConfigurationService) {
      $scope.searchForBuilding = function (buildingQuery) {
        var url = ConfigurationService.search_path;
        if (buildingQuery) {
          url += '/' + buildingQuery;
        }
        $location.path(url);
      }
    }
  ]
);

campusBuildingLocatorControllers.controller(
  'ResultsCtrl',
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
