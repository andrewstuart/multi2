'use strict';

/**
 * @ngdoc function
 * @name multi2App.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the multi2App
 */
angular.module('multi2App')
.controller('FormsCtrl', function (
    $scope,
    $routeParams,
    $location,
    forms,
    users,
    storage
  ) {
    $scope.ri = $routeParams;
    $scope.forms = forms;
    $scope.users = users;

    $scope.answers = {};

    var formUrl = $location.path();

    storage.load(formUrl)
      .then(function(a) {
        console.log(a);
        $scope.answers = a;

      }).finally(function() {
        $scope.$watch('answers', function(a) {
          if(a) {
            storage.save(formUrl, a);
          }
        }, true);
      });
  });
