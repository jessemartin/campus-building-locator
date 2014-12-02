var SEARCH_PATH = '/buildings';
var campusBuilding = angular
  .module('campusBuilding', [
    'ngRoute',
    'campusBuildingControllers'
  ])
  .factory('ConfigurationService', function() {
    return {
      search_path: SEARCH_PATH
    };
  })
  .directive('autoFocus', function ($timeout) {
    return {
      link: {
        post: function (scope, element, attr) {
          element[0].focus();
        }
      }
    };
  })
  .filter('encodeURIComponent', function () {
    return window.encodeURIComponent;
  })
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when(SEARCH_PATH, {
        templateUrl: 'partials/results.html',
        controller: 'ResultsCtrl'
      })
      .when(SEARCH_PATH + '/:query', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: SEARCH_PATH
      });
  }]);

