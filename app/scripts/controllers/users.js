'use strict';

/**
 * @ngdoc function
 * @name multi2App.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the multi2App
 */
angular.module('multi2App')
  .controller('UsersCtrl', function ($scope, users) {
    $scope.users = users;
  });
