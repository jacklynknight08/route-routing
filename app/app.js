"use strict";

var app = angular.module("RouteRoutingApp", ['ngRoute']);

app.config(function($routeProvider){
 	$routeProvider.
 	when('/route66', {
 		templateUrl: 'partials/highway1.html',
 		controller: 'Highway1Ctrl'
 	}).
 	when('/california-route1', {
 		templateUrl: 'partials/highway2.html',
 		controller: 'Highway2Ctrl'
 	}).
 	otherwise('/');
});
