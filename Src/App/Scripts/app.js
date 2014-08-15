'use strict';

/* App Module */

var incidentApp = angular.module('incidentApp', [
    'ngRoute',
    'incidentControllers',
    //'incidentFilters',
    'incidentServices'
]);


incidentApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/incidentLists', {
                templateUrl: 'partials/incidentlist.html',
                controller: 'incidentListCtrl'
            }).
            when('/add', {
                templateUrl: 'partials/signup.html',
                controller: 'incidentAddCtrl'
            }).
            when('/incident/:id', {
                templateUrl: 'partials/incidentdetail.html',
                controller: 'incidentDetailCtrl'
            }).
            otherwise({
                redirectTo: '/incidentLists'
            });
    }]);



