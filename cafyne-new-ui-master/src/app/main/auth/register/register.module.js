(function () {
	'use strict';

	angular
		.module('app.auth.register', [])
		.config(config);

	/** @ngInject */
	function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
		// State
		$stateProvider.state('app.pages_auth_register', {
			url: '/auth/register',
			views: {
				'main@': {
					templateUrl: 'app/core/layouts/content-only.html',
					controller: 'MainController as vm'
				},
				'content@app.pages_auth_register': {
					templateUrl: 'app/main/auth/register/register.html',
					controller: 'RegisterV2Controller as vm'
				}
			},
			bodyClass: 'register'
		});

		// Translate
		$translatePartialLoaderProvider.addPart('app/main/auth/register');

		// Navigation
		/*msNavigationServiceProvider.saveItem('auth.register', {
		 title: 'Register v2',
		 state: 'app.pages_auth_register',
		 weight: 4
		 });*/
	}

})();
