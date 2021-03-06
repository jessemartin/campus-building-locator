var campusBuildingControllers = angular.module(
  'campusBuildingControllers',
  []
);

campusBuildingControllers.controller(
  'SearchCtrl',
  [
    '$scope',
    '$location',
    'ConfigurationService',
    function ($scope, $location, ConfigurationService) {
      $scope.searchForBuilding = function (query) {
        var url = ConfigurationService.search_path;
        if (query) {
          url += '/' + query;
        }
        $location.path(url);
      }
    }
  ]
);

campusBuildingControllers.controller(
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
