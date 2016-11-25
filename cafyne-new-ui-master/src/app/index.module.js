(function () {
  'use strict';

  /**
   * Main module of the Cafyne
   */
  angular
    .module('cafyne', [
      // Core
      'app.core',
      // Navigation
      'app.navigation',
      // Toolbar
      'app.toolbar',
      // Quick Panel
      'app.quick-panel',
      // app
      'app.auth',
      'app.listen',
      'app.post',
      'app.collaborate'
    ]);
})();
