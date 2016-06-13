//angular.module('MyApp.Home')

//.controller('HomeController', function() {
//	var self = this;
//	self.name = 'George'
//	console.log('HomeController initialized');
//});


(function() {
  'use strict';

  angular
    .module('template')
    .controller('HomeController', HomeController);
 


  /** @ngInject */
  function HomeController(MainResource, GoogleRequestService) {
    var self = this;
    self.location = '40.7547189,-73.9732749';
    self.businessType = ['restaurant','hotel','pharmacy','gas_station','church'];
    


      self.submitButton = function(ulocation, ubusinessType) {
          console.log(ulocation);
          console.log(ubusinessType);

          GoogleRequestService.getNearbyAddresses(ulocation, ubusinessType, function (isValid, addresses) {
             if (isValid) {
                console.log(addresses);
                self.addresses = addresses;
            }
        });



      }



       // console.log(self.selectedbusinessType);
       //  MainDataService.getMainCtrlAddresses(ulocation, ubusinessType, function (isValid, addresses) {
       //      if (isValid) {
       //          console.log(addresses);
       //          self.addresses = addresses;
       //      }
       //  });
    //};




      self.makeRequest = function() {

      	console.log('Hitting the function');

      //	getNearbyAddresses
      	// first argument is the URL params
      	// second argument is the body params


      	// using futures
      	

      	// MainResource.getPeople({
      	// 	page: 0,
      	// 	numResults: 55
      	// }, function onSuccess(response) {
      	// 	self.people = response;
      	// 	console.log('SUCCESS: ', response)
      	// }, function onError(errorMessage) {
      	// 	console.log('ERROR: ', errorMessage)
      	// })


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

  } 

})();
