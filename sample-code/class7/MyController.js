angular.module('MyControllerModule', [])

.controller('MyController', function($timeout, $interval, $log, $scope, MyCarFactory, COLORS) {
	var self = this;

	self.car = new MyCarFactory('Ford', 'Explorer');

	self.myColors = COLORS;

	// self.car = {
	// 	make: 'Ford',
	// 	model: 'Explorer'
	// };

	// self.onYearChanged = function() {
	// 	if (self.car.year) {
	// 		self.car.age = 2016 - parseInt(self.car.year);
	// 	}
	// };

	// $scope.$watch('ctrl.car', function(newVal, oldVal) {
	// 	// console.log("newVal: ", newVal);
	// 	// console.log("oldVal: ", oldVal);
	// 	if (newVal) {
	// 		self.car.age = 2016 - parseInt(newVal);
	// 	}
		
	// }, true);

	// $log.log('normal log');
	// $log.info('info log');
	// $log.error('error log');
	// $log.debug('debug log');

	// self.name = 'Harry';

	// $timeout(function() {
	// 	console.log('function was called');
	// 	self.name = 'George';
	// }, 3000);

	// self.count = 10;
	// $interval(function() {
	// 	self.count--;
	// }, 1000, 10);
})