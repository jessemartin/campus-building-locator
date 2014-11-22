var campusBuildingLocator = angular.module('campusBuildingLocator', [
  'ngRoute',
  'campusBuildingLocatorControllers'
]);

campusBuildingLocator.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/map', {
      templateUrl: 'partials/map.html',
      controller: 'MapCtrl'
    }).
    when('/map/:query', {
      templateUrl: 'partials/map.html',
      controller: 'MapCtrl'
    }).
    otherwise({
      redirectTo: '/map'
    });
}]);
