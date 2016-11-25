(function () {
  'use strict';

  angular
    .module('app.core')
    .config(config);

  /** @ngInject */
  function config($ariaProvider, $logProvider, msScrollConfigProvider, fuseConfigProvider, localStorageServiceProvider) {
    // Enable debug logging
    $logProvider.debugEnabled(true);

    /*eslint-disable */

    // ng-aria configuration
    $ariaProvider.config({
      tabindex: false
    });

    // Cafyne theme configurations
    fuseConfigProvider.config({
      'disableCustomScrollbars': false,
      'disableCustomScrollbarsOnMobile': true,
      'disableMdInkRippleOnMobile': true
    });

    // msScroll configuration
    msScrollConfigProvider.config({
      wheelPropagation: true
    });

    localStorageServiceProvider.setPrefix('cafyne');

    /*eslint-enable */
  }
})();
