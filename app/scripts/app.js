'use strict';

/**
 * @ngdoc overview
 * @name multi2App
 * @description
 * # multi2App
 *
 * Main module of the application.
 */
angular
  .module('multi2App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users/:userId/forms/:formId?/:q?', {
        templateUrl: '/views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/users/:id?', {
        templateUrl: '/views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/users'
      });
  });
