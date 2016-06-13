angular.module('MyApp.MyFav')

.controller('MyFavController', function(STATES) {
	var self = this;
	self.navStates = STATES;
	console.log('MyFavController initialized');
});