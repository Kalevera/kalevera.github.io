(function(){
    'use strict'
    var angularApp = angular.module("mainRoom",['mu','storyDirective','asciiDirective','ngResource','ngRoute']);
    angularApp.config(['$routeProvider' ,'$locationProvider', function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {templateUrl: '/index.html', controller: 'cardController'});
        $routeProvider.when('/stories/story', {templateUrl: '/u/story.html', controller: 'storyController'});
        $routeProvider.when('/profile', {templateUrl: '/u/profile.html', controller: 'userController'});
    }])
})();