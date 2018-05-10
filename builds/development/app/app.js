// initialize material design js
$.material.init();

(function () {
    'use strict';
    angular
        .module('ngFit', ['ngRoute'])
        .config(ngFitConfig);

    ngFitConfig.$inject = ['$routeProvider'];

    function ngFitConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/views/index.html"
            }).when('/about', {
                templateUrl: "/views/about.html"
            }).when('/contacts', {
                templateUrl: "/views/contacts.html"
            }).when('/child1', {
                templateUrl: "/views/child1.html"
            }).when('/child2', {
                templateUrl: "/views/child2.html"
            });
    }
}());

