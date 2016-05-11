(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainResource, MainDataService) {
    var self = this;
    self.pageTitle = "Search Address"




    self.onAddressChange = function(userAddress) {
        MainDataService.getMainCtrlAddresses(userAddress, function(isValid, addresses) {
            if (isValid) {
                self.addresses = addresses;
            }
        });
    };



/*

    self.makeRequest = function() {
    	// first argument is the URL params
    	// second argument is the body params


    	// using futures
    	MainResource.getPeople({
    		page: 0,
    		numResults: 55
    	}, function onSuccess(response) {
    		self.people = response;
    		console.log('SUCCESS: ', response)
    	}, function onError(errorMessage) {
    		console.log('ERROR: ', errorMessage)
    	})

    	// Using promise
    	// resourceObject.getPeople({
    	// 	page: 0,
    	// 	numResults: 55
    	// })
    	// .$promise
    	// .then(function onSuccess(response) {
    	// 	self.people = response;
    	// 	console.log('SUCCESS: ', response)
    	// }, function onError(errorMessage) {
    	// 	console.log('ERROR: ', errorMessage)
    	// });

    	//Body Parameters
    	// , {
    	// 	bodyParam1: 'val1',
    	// 	bodyParam2: 'val2'
    	// });
    };

 */

  }

})();
