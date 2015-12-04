'use strict';

/**
 * @ngdoc service
 * @name multi2App.users
 * @description
 * # users
 * Service in the multi2App.
 */
angular.module('multi2App')
  .service('users', function ($http) {
    var users = this;

    $http.get('/data/users.json')
      .then(function(res) {
        users.list = res.data;
      });
  });
