angular.module('MyModule', ['MyServices'])

.controller('MyController', function($timeout, $interval, $log){

	var self = this;

	$log.log('normal log');
	$log.info('info log');
	$log.error('error log');
	$log.debug('debug log');

	self.name = "Harry";

	$timeout(function(){
		console.log('function was called');
		self.name = "George";
	}, 3000);

	self.count = 10;
	$interval(function(){
		console.log('function was called');
		self.count--;
	}, 1000, 10);
	
});