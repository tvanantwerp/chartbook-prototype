var app = angular.module('chartbook', ['ngRoute', 'ngAnimate', 'ngTouch'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/:pageIndex', {
				templateUrl: 'templates/page.html'
			})
			.otherwise({
				redirectTo: '/0',
				templateUrl: 'templates/page.html'
			});
	}]);