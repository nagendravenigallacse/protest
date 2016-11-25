(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthFactory', AuthFactory);

  AuthFactory.$inject = ['$q', '$resource', 'urls'];
  /* @ngInject */
  function AuthFactory($q, $resource, urls) {

    var loginResource = $resource(urls.apiUrl + urls.user + '/' + urls.login + '/:email/:password', null, {update: {method: "PUT"}});

    var userLoginFact = function (username, password) {
      var defer = $q.defer();
      loginResource
        .get({email: username, password: password}, null, function (data) {
          defer.resolve(data);
        }, function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };


    return {
      userLoginFact: userLoginFact
    }

  }
})();
