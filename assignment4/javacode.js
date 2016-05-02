angular.module('MyControllerModule', [])

.controller('myPlaylistController', function(UserMusicPlaylist) {
	var self = this;
	
	self.userPlaylist = new UserMusicPlaylist();
	
	self.onUserClick = function(){
		self.userPlaylist.UserClick();
	};

	self.userAgeCheck = function(){
		return self.userPlaylist.userCheckAge();
	};
	
})

.factory('UserMusicPlaylist', function() {

	this.userName = null;
	this.userAge = 0;
	this.userExplicit = null;

	function UserMusicPlaylist() {
	    this.musicPlaylistArr = [{
			Genre: "Rap",
			name: 'Rap 1',
			userChecked: false
		},{
			Genre: "Rap",
			name: 'Rap 2',
			userChecked: false
		},{
			Genre: "Rap",
			name: 'Rap 3',
			userChecked: false
		},{
			Genre: "Pop",
			name: 'Pop 1',
			userChecked: false
		},{
			Genre: "Pop",
			name: 'Pop 2',
			userChecked: false
		},{
			Genre: "Pop",
			name: 'Pop 3',
			userChecked: false
		},{
			Genre: "Rock",
			name: 'Rock 1',
			userChecked: false
		},{
			Genre: "Rock",
			name: 'Rock 2',
			userChecked: false
		},{
			Genre: "Rock",
			name: 'Rock 3',
			userChecked: false
		}];
	}


	UserMusicPlaylist.prototype.UserClick = function() {
		console.log('Name:', this.userName);
		console.log('Age:', this.userAge);
		if (this.userExplicit) {
			console.log('Explicit:', this.userExplicit);
		} else {
			console.log('Explicit: false');
		}
		
		console.log('Selected Songs:');

		for (var i = 0; i < this.musicPlaylistArr.length ; i++) {

			if (this.musicPlaylistArr[i].userChecked) 
				console.log(this.musicPlaylistArr[i].name);
      
        }
		
	}


	UserMusicPlaylist.prototype.userCheckAge = function() {
		if (this.userAge >= 18) {
			return true;
			} else {
			return false;
			}
	}

	return UserMusicPlaylist;
});





