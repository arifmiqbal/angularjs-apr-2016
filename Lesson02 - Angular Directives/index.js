
var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function() {
	var self = this;

	self.greeting = 'Hello George';
	self.age = 12;


	self.person = {
		name: {
			firstName: ''
		}
	};

	self.onUserClick = function() {
		self.isBoxChecked = !self.isBoxChecked;
	};

	self.isBoxChecked = true;

	// self.myDog = {
	// 	name: 'Max'
	// };
	// self.myCat = {
	// 	name: 'Sally'
	// };
	// self.myHamster = {
	// 	name: 'Tom'
	// };

	// self.myPerson = {
	// 	name: 'George',
	// 	age: 20,
	// 	zip: 91110,
	// 	state: 'NY'
	// };

	// self.myArray = [{
	// 	firstName: 'Tom'
	// }, {
	// 	firstName: 'Sally'
	// }, {
	// 	firstName: 'Zach'
	// }, {
	// 	firstName: 'Harry'
	// }];

	// self.myArray = ['Tom', 'Sally', 'Zach', 'Harry'];
	// self.textColor = "whiteText";

	// self.textColor = {
	// 	whiteText: true,
	// 	yankees: true,
	// 	redSox: false
	// };

	// self.textColor = ['whiteText', 'strong'];
});