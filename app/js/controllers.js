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
        console.log(url);

        $location.path(url);
        // $scope.$apply();
      };
    }
  ]
);

campusBuildingLocatorControllers.controller(
  'MapCtrl',
  [
    '$scope',
    '$http',
    function ($scope, $http) {
    }
  ]
);
