'use strict';

/**
 * @ngdoc service
 * @name multi2App.forms
 * @description
 * # forms
 * Service in the multi2App to expose forms data
 */
angular.module('multi2App')
.service('forms', function ($http) {
  var forms = this;

  /**
   * @ngdoc
   * @propertyOf multi2App.service:forms
   * @name multi2App.service:forms#list
   * @description `list` is a property to expose the forms retrieved from the
   * backend.
   */
  $http.get('data/forms.json')
  .then(function(res) {
    forms.list = res.data;
  });
});
