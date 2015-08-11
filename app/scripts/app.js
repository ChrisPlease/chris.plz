'use strict';

/**
 * @ngdoc overview
 * @name chrisplzApp
 * @description
 * # chrisplzApp
 *
 * Main module of the application.
 */
var app = angular
  .module('chrisplzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('FURL', 'https://chrisplz.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:postId', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.requireAuth();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
