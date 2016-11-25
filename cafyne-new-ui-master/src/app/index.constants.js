(function () {
  'use strict';

  angular
    .module('cafyne')
    .constant('urls', {
      apiUrl: 'http://ec2-54-244-209-153.us-west-2.compute.amazonaws.com:8080/v1/',
      apiUrl2: 'http://ec2-54-244-209-185.us-west-2.compute.amazonaws.com:8080/v1/',
      apiUrl3: 'http://ec2-54-244-189-97.us-west-2.compute.amazonaws.com:8080/v1/',
      user: 'user',
      login: 'login',
      listen: 'listen',
      interest: 'intrest',
      archived: 'archived',
      profiles: 'profiles',
      search: 'search',
      getProfilesBySearchId: 'getProfilesBySearchId'
    });
})();
