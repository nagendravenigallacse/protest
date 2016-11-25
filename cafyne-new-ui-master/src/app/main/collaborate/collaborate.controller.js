(function () {
	'use strict';

	angular
		.module('app.collaborate')
		.controller('CollaborateController', CollaborateController);

	/** @ngInject */
	function CollaborateController(SampleData) {
		var vm = this;

		// Data
		vm.helloText = SampleData.data.helloText;

		// Methods

		//////////
	}
})();
