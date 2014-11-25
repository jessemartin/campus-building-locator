var campusBuildingLocator = angular.module('campusBuildingLocator', [
  'ngRoute',
  'campusBuildingLocatorControllers'
]);

var SEARCH_PATH = '/buildings';
campusBuildingLocator.factory('ConfigurationService', function() {
  return {
    search_path: SEARCH_PATH
  };
});

campusBuildingLocator.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when(SEARCH_PATH, {
      templateUrl: 'partials/map.html',
      controller: 'MapCtrl'
    }).
    when(SEARCH_PATH + '/:query', {
      templateUrl: 'partials/map.html',
      controller: 'MapCtrl'
    }).
    otherwise({
      redirectTo: SEARCH_PATH
    });
}]);
