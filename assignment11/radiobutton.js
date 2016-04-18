
var myMod = angular.module('MyModule', []);

myMod.controller('MyController', function(){

	var self = this;

	self.pgtitle = 'Assignment #1 - UI Theme Picker';

	self.default = {
		colorTitle: 'Default',
		bkgColor: 'whiteBkg',
		box1Color: 'whiteBkgBox1' ,
		box1textColor: 'grey' ,
		box1Text: 'Default Theme Box 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		box2Color: 'whiteBkgBox2' ,
		box2textColor: 'grey',
		box2Text: 'Default Theme Box 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	};


	self.redColor = {
		colorTitle: 'Red',
		bkgColor: 'redBkg',
		box1Color: 'redBkgBox1',
		box1textColor: 'whiteText',
		box1Text:'Red Theme Box 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		box2Color: 'redBkgBox2' ,
		box2textColor: 'whiteText',
		box2Text:'Red Theme Box 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

	};

	self.greenColor = {
		colorTitle: 'Green',
		bkgColor: 'greenBkg',
		box1Color: 'greenBkgBox1' ,
		box1textColor: 'black' ,
		box1Text:'Green Theme Box 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		box2Color: 'greenBkgBox2' ,
		box2textColor: 'black',
		box2Text:'Green Theme Box 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	};

	self.blueColor = {
		colorTitle: 'Blue',
		bkgColor: 'blueBkg',
		box1Color: 'blueBkgBox1' ,
		box1textColor: 'white' ,
		box1Text:'Blue Theme Box 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		box2Color: 'blueBkgBox2' ,
		box2textColor: 'white',
		box2Text:'Blue Theme Box 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	};

	self.yellowColor = {
		colorTitle: 'Yellow',
		bkgColor: 'yellowBkg',
		box1Color: 'yellowBkgBox1' ,
		box1textColor: 'blackText' ,
		box1Text:'Yellow Theme Box 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		box2Color: 'yellowBkgBox2' ,
		box2textColor: 'blackText',
		box2Text:'Yellow Theme Box 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	};

	self.colorSelected = self.default;



	
});