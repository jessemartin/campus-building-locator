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
      templateUrl: 'partials/results.html',
      controller: 'ResultsCtrl'
    }).
    when(SEARCH_PATH + '/:query', {
      templateUrl: 'partials/results.html',
      controller: 'ResultsCtrl'
    }).
    otherwise({
      redirectTo: SEARCH_PATH
    });
}]);
