(function () {
  'use strict';

  angular
    .module('app.auth')
    .service('AuthService', AuthService);

  AuthService.$inject = [];
  /* @ngInject */
  function AuthService(localStorageService) {

    var vm = this;

    vm.setUserObject = function (obj) {
      console.log(obj)
      localStorageService.set('userObj', obj);
    };

    vm.getUserObject = function () {
      return localStorageService.get('userObj');
    };

    vm.removeUserObject = function () {
      localStorageService.remove('userObj');
    };

  }
})();
