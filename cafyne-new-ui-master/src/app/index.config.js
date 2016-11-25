(function () {
  'use strict';

  angular
    .module('cafyne')
    .config(config);

  /** @ngInject */
  function config($translateProvider, $httpProvider) {
    // Put your common app configurations here

    // angular-translate configuration
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');

    $httpProvider.interceptors.push(checkNetworkCallsStatus);

  }

  function checkNetworkCallsStatus($q, $injector, $rootScope, $timeout, urls, AuthService) {
    var reqCount = 0;
    return {
      'request': function (config) {
        return config;
      },
      'response': function (response) {
        return response;
      },
      'requestError': function (req) {
        return $q.reject(req);
      },
      'responseError': function (res) {
        if (res.config && res.config.url.indexOf('.html') < 0) {
          var state = $injector.get('$state');
          var CommonServices = $injector.get('CommonServices');
          var AuthService = $injector.get('AuthService');

          if (res.status === 500) {
            CommonServices.showToast('Oops! We are sorry that the server has ran into trouble while fulfilling your request. Please try again after some time.');
          } else if (res.status === 401 || res.status === 403) {
            AuthService.removeUserObject();
            state.go('app.pages_auth_login');
            console.log('Navigating to login page.');
            CommonServices.showToast('You are not authorised. Please login.');
          } else if (res.status === 0) {
            CommonServices.showToast('Unable to connect to the server. Please check your connection and try again.');
          }
        }
        return $q.reject(res);
      }
    };
  }

})();
