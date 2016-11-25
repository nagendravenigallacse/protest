(function () {
  'use strict';

  angular
    .module('app.listen')
    .factory('ListenFactory', ListenFactory);

  ListenFactory.$inject = ['$q', '$resource', 'urls'];
  /* @ngInject */
  function ListenFactory($q, $resource, urls) {

    var listenResource = $resource(urls.apiUrl2 + urls.listen + '/:type/:companyId', null, {update: {method: "PUT"}});
    var profilesResource = $resource(urls.apiUrl3 + urls.profiles + '/' + urls.getProfilesBySearchId + '/:searchId', null, {update: {method: "PUT"}});
    var searchResource = $resource(urls.apiUrl3 + urls.profiles + '/' + urls.search + '/:searchId', null, {update: {method: "PUT"}});

    var getInterestedPostsFact = function (companyId) {
      var defer = $q.defer();
      listenResource
        .query({type: urls.interest, companyId: companyId}, null, function (data) {
          defer.resolve(data);
        }, function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };


    var getNotInterestedPostsFact = function (companyId) {
      var defer = $q.defer();
      listenResource
        .query({type: urls.archived, companyId: companyId}, null, function (data) {
          defer.resolve(data);
        }, function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };

    var getAllProfilesFact = function (searchId, pageNo, rows, sortField, sortOrder) {
      var defer = $q.defer();
      profilesResource
        .query({
          searchId: searchId,
          page: pageNo,
          rows: rows,
          sort_field: sortField,
          sort_order: sortOrder
        }, null, function (data) {
          defer.resolve(data);
        }, function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };

    var searchAllProfilesFact = function (searchId) {
      var defer = $q.defer();
      searchResource
        .query({searchId: searchId}, null, function (data) {
          defer.resolve(data);
        }, function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };


    return {
      getInterestedPostsFact: getInterestedPostsFact,
      getNotInterestedPostsFact: getNotInterestedPostsFact,
      getAllProfilesFact: getAllProfilesFact,
      searchAllProfilesFact: searchAllProfilesFact
    }

  }
})();
