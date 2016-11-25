(function () {
  'use strict';

  angular
    .module('app.auth.login')
    .controller('LoginV2Controller', LoginV2Controller);

  /** @ngInject */
  function LoginV2Controller($state, AuthFactory, CommonServices, AuthService) {
    var vm = this;

    vm.loginUser = function (user) {
      console.log(user);

      AuthFactory
        .userLoginFact(user.username, user.password)
        .then(function (response) {
          console.log(response);
          AuthService.setUserObject(response);
          CommonServices.showToast('Successfully logged in');
          $state.go('app.listen');
        }, function (error) {
          console.log(error);
        })
    };

  }
})();
