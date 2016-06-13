(function() {
  'use strict';

  angular
    .module('template')




    .directive('gdFolder', function() {
        return {
            controller: 'GDFolderController as folderCtrl',
            // scope: false
            // scope: true
            scope: {}
        }
    })

    .controller('GDFolderController', function() {
        var self = this;
        self.expand = false;
    })












    .directive('gdUser', function() {
    	return {
    		templateUrl: 'app/main/gd-user.html',
    		controller: 'GDUserController as gdCtrl',
            scope: true
    		// controller: function() {
    		// 	var self = this;

    		// 	self.onClick = function() {
    		// 		//
    		// 	}
    		// }
    	}
    })

    .controller('GDUserController', function() {
    	var self = this;
    	self.userName = 'George';
    })
















    .directive('gdBasicTemplateUrl', function() {
    	return {
    		// restrict: 'EA',
    		templateUrl: 'app/main/gd-basic-template-url.html'
    	}
    })
    
    .directive('gdBasic', function() {
    	return {
    		template: '<span>Hello World</span>'
    	};
    });

})();
