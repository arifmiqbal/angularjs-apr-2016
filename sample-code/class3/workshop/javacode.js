
var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function(){

	var self = this;

	self.isBoxChecked = true;

	self.onUserClick = function(){

		console.log('you click a button');
		self.isBoxChecked = !self.isBoxChecked;
		
	}


	self.onDoneClick = function(){

		console.log('you click a button');
		self.isBoxChecked = !self.isBoxChecked;
		self.userDefaultProfile = angular.copy(self.userProfile);
	}


	self.onCancelClick = function(){

		console.log('you click a button');
		self.isBoxChecked = !self.isBoxChecked;
		self.userProfile = angular.copy(self.userDefaultProfile);
	}
	

	self.userProfile = {
		firstname: 'George',
		lastname: 'Dagher',
		email: 'george@nycda.com' 
	}

	


	



	
});