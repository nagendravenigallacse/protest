(function () {
	'use strict';

	angular
		.module('app.auth.login', [])
		.config(config);

	/** @ngInject */
	function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
		// State
		$stateProvider.state('app.pages_auth_login', {
			url: '/auth/login',
			views: {
				'main@': {
					templateUrl: 'app/core/layouts/content-only.html',
					controller: 'MainController as vm'
				},
				'content@app.pages_auth_login': {
					templateUrl: 'app/main/auth/login/login.html',
					controller: 'LoginV2Controller as vm'
				}
			},
			bodyClass: 'login'
		});

		// Translation
		$translatePartialLoaderProvider.addPart('app/main/auth/login');

		// Navigation
		/*msNavigationServiceProvider.saveItem('auth.login', {
		 title: 'Login v2',
		 state: 'app.pages_auth_login',
		 weight: 2
		 });*/
	}

})();
