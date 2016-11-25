(function () {
	'use strict';

	angular
		.module('app.auth', [
			'app.auth.login',
			'app.auth.register',
			'app.auth.forgot-password',
			'app.auth.reset-password'
		])
		.config(config);

	/** @ngInject */
	function config(msNavigationServiceProvider) {

		/*// Navigation
		 msNavigationServiceProvider.saveItem('auth', {
		 title: 'Authentication',
		 icon: 'icon-lock',
		 weight: 1
		 });*/


	}


})();
