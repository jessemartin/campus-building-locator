var campusBuildingLocatorControllers=angular.module("campusBuildingLocatorControllers",[]);campusBuildingLocatorControllers.controller("SearchCtrl",["$scope","$location",function(o,r){o.searchForBuilding=function(o){if(o){var l="/map/"+o;r.path(l)}}}]),campusBuildingLocatorControllers.controller("MapCtrl",["$scope","$routeParams",function(o,r){o.query=r.query}]);