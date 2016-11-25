(function () {
	'use strict';

	angular
		.module('cafyne')
		.controller('IndexController', IndexController);

	/** @ngInject */
	function IndexController(fuseTheming) {
		var vm = this;

		// Data
		vm.themes = fuseTheming.themes;

		//////////
	}
})();
