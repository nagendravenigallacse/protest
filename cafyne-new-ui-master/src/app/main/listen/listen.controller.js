(function () {
  'use strict';

  angular
    .module('app.listen')
    .controller('ListenController', ListenController);

  /** @ngInject */
  function ListenController(SampleData, Timeline, Employees, localStorageService, ListenFactory) {
    var vm = this;
    var userObj = localStorageService.get('userObj');
    // Data
    vm.helloText = SampleData.data.helloText;
    vm.posts = Timeline.posts;
    vm.activities = Timeline.activities;
    vm.employees = Employees.data;

    vm.selectedVal = 1;

    vm.dtOptions = {
      dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
      pagingType: 'simple',
      autoWidth: false,
      responsive: true
    };

    vm.hidden = false;
    vm.isOpen = false;
    vm.hover = false;

    vm.items = [
      { name: "Twitter", icon: "img/icons/twitter.svg", direction: "bottom" },
      { name: "Facebook", icon: "img/icons/facebook.svg", direction: "top" },
      { name: "Google Hangout", icon: "img/icons/hangout.svg", direction: "bottom" }
    ];



    vm.getAllInterestedPosts = function () {
      ListenFactory
        // .getInterestedPostsFact(userObj.companyId)
        .getInterestedPostsFact(21)
        .then(function (response) {
            vm.interestedPosts = response;
          },
          function (error) {
            console.log(error);
          });
    };

    vm.getAllNotInterestedPosts = function () {
      ListenFactory
        // .getNotInterestedPostsFact(userObj.companyId)
        .getNotInterestedPostsFact(21)
        .then(function (response) {
            vm.notInterestedPosts = response;
          },
          function (error) {
            console.log(error);
          });
    };

    vm.getAllProfiles = function (searchId, pageNo, rows, sortField, sortOrder) {
      searchId = searchId || -1;
      pageNo = pageNo || 1;
      rows = rows || 10;
      sortField = sortField || 'created_time';
      sortOrder = sortOrder || 'desc';

      ListenFactory
        .getAllProfilesFact(searchId, pageNo, rows, sortField, sortOrder)
        .then(function (response) {
          console.log(response);
          vm.allProfiles = response;
        }, function (error) {
          console.log(error);
        });
    };

    vm.searchAllProfiles = function (searchId) {
      searchId = searchId || 21;
      ListenFactory
        .searchAllProfilesFact(searchId)
        .then(function (response) {
          vm.searchedProfiles = response;
          console.log(response);
        }, function (error) {
          console.log(error);
        });
    };

    vm.initiateProfileManagerTab = function () {
      vm.getAllProfiles(-1, 1, 10, 'created_time', 'desc');
    };

    vm.optionSelected = function (val) {
      vm.selectedVal = val;
      if (val === 1) {
        vm.getAllProfiles(-1, 1, 10, 'created_time', 'desc');
      } else {
        vm.searchAllProfiles(21);
      }
    };

    vm.getAllInterestedPosts();
  }
})();
