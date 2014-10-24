angular.module('chartbook')
	.controller('PageLayoutCtrl', ['PageFactory', function(PageFactory){
		this.foo = "bar";

		PageFactory
			.getBook()
			.then(function(){
				this.pages = PageFactory.pages;
			}.bind(this));

	}]);