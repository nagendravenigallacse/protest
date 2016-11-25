(function () {
  'use strict';

  angular
    .module('cafyne')
    .service('CommonServices', CommonServices);

  /** @ngInject */
  function CommonServices($mdToast) {
    var vm = this;

    vm.showToast = function (message) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(message || 'Toast!')
          .position('top right')
          .hideDelay(3000)
      );
    };
  }
})();
