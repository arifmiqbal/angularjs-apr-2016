
var myMod = angular.module('MyModule', []);


myMod.controller('MyFolderController', function(){

	var self = this;
	self.isBoxChecked = false;
	self.filename = '';
	self.folders = [{
		foldername:"Folder 1",
		subfoldername: ['folder 1.1', 'folder 1.2', 'folder 1.3']
	},
	{
		foldername:"Folder 2",
		subfoldername: ['folder 2.1', 'folder 2.2', 'folder 2.3']
	},
	{
		foldername:"Folder 3",
		subfoldername: ['folder 3.1', 'folder 3.2', 'folder 3.3']
	},
	{
		foldername:"Folder 4",
		subfoldername: ['folder 4.1', 'folder 4.2', 'folder 4.3']
	}];

	//Add Folder

	self.onUserClickFolder = function(){

		self.isBoxChecked = true;
		console.log(self.folderSelected + 'dddd');
		self.folders[self.folderSelected].subfoldername.push(self.folders.subfoldername); 
		
		self.folders.subfoldername ='';
		self.folderSelected = null;
	};

	
});


myMod.controller('MyFormController', function(){

	var self = this;
	self.userForm = [];
	
	// Add item to array and clear the fields
	self.onUserClick = function(){
		self.userForm.push({
			name: self.userForm.name,
			description: self.userForm.description,
			priority: self.userForm.priority
		});

		self.userForm.name ='';
		self.userForm.description ='';
		self.userForm.priority ='';
	};

	//Remove item

	self.remove = function(index) {
		console.log(index);
    	self.userForm.splice(index, 1);
    };
});