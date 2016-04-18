
var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function(){

	var self = this;

	self.greeting = 'Hello George';
	self.HW = 'Hello World!';

	//self.textColor = 'white';
	self.textColor = {
		white: true,
		yankees: true,
		redsox: false
	};

	self.textColor = ['whiteText', 'strong']

});