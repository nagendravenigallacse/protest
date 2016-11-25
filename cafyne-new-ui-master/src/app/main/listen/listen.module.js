(function () {
  'use strict';

  angular
    .module('app.listen', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider
      .state('app.listen', {
        url: '/listen',
        views: {
          'content@app': {
            templateUrl: 'app/main/listen/listen.html',
            controller: 'ListenController as vm'
          }
        },
        resolve: {
          SampleData: function (msApi) {
            return msApi.resolve('listen.listen@get');
          },
          Timeline: function (msApi) {
            return msApi.resolve('listen.timeline@get');
          },
          Employees: function (msApi) {
            return msApi.resolve('tables.employees100@get');
          }
        }
      });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/listen');

    // Api
    msApiProvider.register('listen.listen', ['app/data/listen/listen.json']);
    msApiProvider.register('listen.timeline', ['app/data/listen/timeline.json']);
    msApiProvider.register('tables.employees100', ['app/data/tables/employees100.json']);

    // Navigation
    /*msNavigationServiceProvider.saveItem('cafyne', {
     title: 'LISTEN',
     group: true,
     weight: 1
     });*/

    msNavigationServiceProvider.saveItem('cafyne.listen', {
      title: 'Listen',
      icon: 'icon-headphones',
      state: 'app.listen',
      /*stateParams: {
       'param1': 'page'
       },*/
      translate: 'LISTEN.LISTEN_NAV',
      weight: 1
    });
  }
})();
