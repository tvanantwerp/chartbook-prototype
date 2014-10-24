angular.module('chartbook')
	.factory('PageFactory', ['$q', '$http', function PageFactory ($q, $http) {
		PageFactory.pages = [];
		PageFactory.pageCount = 0;

		PageFactory.getBook = function() {
			var deferred = $q.defer(),
				httpPromise = $http.get('data/bia.json');

			return httpPromise
			.then(function(response) {
				deferred.resolve(response)
				return deferred.promise;
			}, function(error) {
				console.log(error);
			})
			.then(function(response) {
				PageFactory.pages = response.data.pages;
				PageFactory.pageCount = response.data.pages.length;
			}, function(error) {
				console.log(error);
			});
		};

		return PageFactory;

	}]);