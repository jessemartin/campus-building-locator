var campusBuildingLocatorControllers=angular.module("campusBuildingLocatorControllers",[]);campusBuildingLocatorControllers.controller("SearchCtrl",["$scope","$location",function(o,r){o.searchForBuilding=function(o){var l="/map";o&&(l+="/"+o),r.path(l)}}]),campusBuildingLocatorControllers.controller("MapCtrl",["$scope","$routeParams","$http",function(o,r,l){var n=r.query;n&&(o.query=n,l.get("api/buildings.json").success(function(r){var l=r.buildings,a=l[n],t=[];a&&t.push(a),o.results=t}))}]);