angular.module('chartbook')
	.controller('KeyboardController', function(){

		this.navigate = function(event) {
			console.log(event.which);
		}

	});