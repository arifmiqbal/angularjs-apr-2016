angular.module('MyControllerModule', [])

.controller('myPlaylistController', function(UserMusicPlaylist) {
	var self = this;
	self.userPlaylist = new UserMusicPlaylist();
	
	self.onUserClick = function(){
		self.userPlaylist.UserClick();
	};
})

.factory('UserMusicPlaylist', function() {

	this.userName = name;
	this.userAge = null;
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
		console.log('Age:', this.userName);
		console.log('Age:', this.userAge);
		console.log('Explicit:', this.userExplicit);
		console.log('Selected Songs:');

		for (var i = 0; i < this.musicPlaylistArr.length ; i++) {

			if (this.musicPlaylistArr[i].userChecked) 
				console.log(this.musicPlaylistArr[i].name);
      
        }
		
	}

	return UserMusicPlaylist;
});





