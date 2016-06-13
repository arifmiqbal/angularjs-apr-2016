(function() {
  'use strict';

  angular
    .module('template')

    .service('GoogleRequestService', function(GoogleResource) {
        var self = this;

        // GoogleRequestService.getNearbyAddresses('123', function(isValid, response) {})
        // onCompletion should be called when response comes in
        self.getNearbyAddresses = function(ulocation, ubusinessType, onCompletion) {
            GoogleResource.getAddresses({
                //address: queryAddress,
                location: ulocation,
                type: ubusinessType
             })
            .$promise
            .then(function(response) {
                //console.log(response);
                onCompletion(true, response);
            }, function onError(error) {
                onCompletion(false, error);
            });
        };
    })

    .factory('GoogleResource', function($resource) {
        // final result:
        // http://maps.googleapis.com/maps/api/geocode/json?address=123
    	//return $resource('http://maps.googleapis.com/maps/api/geocode/json', null, {
            //?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyAYI7MsLZmMija9x7ggUAEIILtrowyHdCw
          //return $resource('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
          return $resource('/api/mySearchNearby', {
                //location: '@location',
                //radius: 500,
                //name: 'harbour',
                location: '@location',
                type: '@type'
           }, {
    		getAddresses: {
    			method: 'GET',
                isArray: true,
                headers: {
                    'content-type': 'application/json'
                }
    		}
    	});
    });
})();



