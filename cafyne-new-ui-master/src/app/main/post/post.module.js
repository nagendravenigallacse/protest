(function () {
  'use strict';

  angular
    .module('app.post', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider
      .state('app.post', {
        url: '/post',
        views: {
          'content@app': {
            templateUrl: 'app/main/post/post.html',
            controller: 'SampleController as vm'
          }
        },
        resolve: {
          SampleData: function (msApi) {
            return msApi.resolve('post@get');
          }
        }
      });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/post');

    // Api
    msApiProvider.register('post', ['app/data/post/post.json']);

    // Navigation
    /*msNavigationServiceProvider.saveItem('cafyne', {
      title: 'POST',
      group: true,
      weight: 1
    });*/

    msNavigationServiceProvider.saveItem('cafyne.post', {
      title: 'Post',
      icon: 'icon-send',
      state: 'app.post',
      /*stateParams: {
       'param1': 'page'
       },*/
      translate: 'POST.POST_NAV',
      weight: 1
    });
  }
})();
