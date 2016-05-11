// angular.module('MyServices', [])

angular.module('MyModule')

.service('MathExpressionsCalc', function() {
	var self = this;

	function myPrivateFunc() {

	}

	var myPrivateObject = {
		hello: 'world'
	}

	self.calculateSum = function(a, b) {
		return a + b;
	};

	self.getMax = function(a, b) {
		if (a>b) {
			return a;
		} else {
			return b;
		}
	};

})

.value('API_KEY', 'ALKSJFLSDKJF')

.value('MyState', {
	
})

.value('COLORS', [{
	name: 'red'
}, {
	name: 'green'
}, {
	name: 'blue'
}, {
	name: 'yellow'
}])


.factory('MyCarFactory', function(MathExpressionsCalc, COLORS) {

	function Car(make, model) {
	    this.make = make;
	    this.model = model;
	}

	Car.prototype.setYear = function(year) {
	     this.year = year;
	     this.age = 2016 - parseInt(year);
	}

	Car.prototype.needsRepair = function() {
	    if (this.age > 10) { 
	    	return true;
	    } else {
	    	return false;
	    }
	}

	return Car;
});