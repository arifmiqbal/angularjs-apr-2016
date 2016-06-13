(function() {
  'use strict';

  angular
    .module('template')


    .service('MathCalculator', function() {
    	var self = this;

    	self.calcuateAverage = function(array) {
    		var sum = 0;
    		for (var i = 0; i < array.length; i++) {
    			sum += array[i];
    		};
    		return sum/array.length;
    	};
    })


    .factory('Person', function() {

    	function Person(init) {
    		// this.fname = 'george';
    		angular.extend(this, init);
    	}

    	return Person;
    })

    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;
    self.greeting = "Hello World"
  }

})();
