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
            }).when('/general', {
                templateUrl: "/views/general.html"
            });
    }
}());

