(function () {
  'use strict';

  angular
    .module('app.collaborate', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider
      .state('app.collaborate', {
        url: '/collaborate',
        views: {
          'content@app': {
            templateUrl: 'app/main/collaborate/collaborate.html',
            controller: 'CollaborateController as vm'
          }
        },
        resolve: {
          SampleData: function (msApi) {
            return msApi.resolve('collaborate@get');
          }
        }
      });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/collaborate');

    // Api
    msApiProvider.register('collaborate', ['app/data/collaborate/collaborate.json']);

    // Navigation
    msNavigationServiceProvider.saveItem('cafyne', {
      title: 'Menu',
      group: true,
      weight: 1
    });

    msNavigationServiceProvider.saveItem('cafyne.collaborate', {
      title: 'Collaborate',
      icon: 'icon-people',
      state: 'app.collaborate',
      /*stateParams: {
       'param1': 'page'
       },*/
      translate: 'COLLABORATE.COLLABORATE_NAV',
      weight: 1
    });
  }
})();
