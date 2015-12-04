'use strict';

/**
 * @ngdoc service
 * @name multi2App.storage
 * @description
 * # storage
 * Service in the multi2App.
 */
angular.module('multi2App')
  .service('storage', function ($window, $q) {
    var s = this;
    var ls = $window.localStorage;

    var prefix = 'STORAGE';

    s.load = function(key) {
      return $q(function(resolve, reject) {
        var txt = ls.getItem(prefix + ':' + key);

        if ( txt ) {
          try {
            var o = JSON.parse(txt);
            return resolve(o);
          } catch (e) {
            return reject('Storage service: error parsing json - ' + e);
          }
        }

        return reject('Storage service: Could not load data for key.')
      });
    }

    s.save = function(key, val) {
      return $q(function(resolve) {
        return resolve(ls.setItem(prefix + ':' + key, JSON.stringify(val)));
      });
    }

    s.clear = function() {
      return $q(function(resolve) {
        localStorage.clear();
        resolve();
      });
    }
  });
