(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;
    self.greeting = "Hello World"

    self.boxes = [];

    self.addBox = function () {
        self.boxes.push({})
    };
    self.removeBox = function () {
        self.boxes.pop();
    };





    self.phoneExp = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;

    self.submitTheForm = function() {
    	if (self.myForm.$valid) {
    		// submit the form
    	} else {
    		// alert phone is not submitted
    	}
    };

    // self.states = ['California', 'Florida', 'New York'];

    // self.states = [{
    // 	name: 'California',
    // 	abbr: 'CA'
    // }, {
    // 	name: 'Florida',
    // 	abbr: 'FL'
    // }, {
    // 	name: 'New York',
    // 	abbr: 'NY'
    // }];

    self.states = {
    	NY: 'New York',
    	FL: 'Florida',
    	CA: 'California'
    }
  }

})();
