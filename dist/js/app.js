var campusBuildingLocator = angular.module('campusBuildingLocator', [
  'ngRoute',
  'campusBuildingLocatorControllers'
]);

campusBuildingLocator.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/search', {
      templateUrl: 'partials/search.html',
      controller: 'SearchCtrl'
    }).
    when('/map/:query', {
      templateUrl: 'partials/map.html',
      controller: 'MapCtrl'
    }).
    otherwise({
      redirectTo: '/search'
    });
}]);
