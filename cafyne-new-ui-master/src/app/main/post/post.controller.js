(function () {
  'use strict';

  angular
    .module('app.post')
    .controller('SampleController', SampleController);

  /** @ngInject */
  function SampleController(SampleData) {
    var vm = this;

    // Data
    vm.helloText = SampleData.data.helloText;

    // Methods

    //////////
  }
})();
