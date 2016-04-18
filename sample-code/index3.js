
var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function(){

	var self = this;

	self.greeting = 'Hello George';
	self.HW = 'Hello World!';

	self.myArray = ['tom', 'bob', 'bill'];

	self.myArray2 = [{
		name: 'Tom Cruise'
		}, 
		{
		name: 'Simon Grant'
		}, 
		{
		name: 'John Smith'
		}];


	self.myPerson = {
		name: 'George',
		age: 20,
		zip: 91110,
		state: 'NY'
	};


	//self.textColor = 'white';
	self.textColor = {
		white: true,
		yankees: true,
		redsox: false
	};

	self.textColor = ['whiteText', 'strong'];

	self.myName = ''

	

	self.myDog = {

		name: 'Max'
	};

	self.myCat = {

		name: 'Sally'
	};


	self.myHamster = {

		name: 'Tom'
	};


});