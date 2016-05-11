// angular.module('MyModule', ['MyServices'])

angular.module('MyModule', ['MyControllerModule'])

.controller('AuxiliaryController', function(COLORS, MathExpressionsCalc) {
	var self = this;
	self.secondCtrlColors = angular.copy(COLORS);
	self.popElement = function() {
		self.secondCtrlColors.pop();
	};

	self.result = MathExpressionsCalc.calculateSum(10, 20);

	self.max = MathExpressionsCalc.getMax(8, 19)
});