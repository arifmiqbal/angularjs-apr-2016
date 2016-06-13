(function() {
  'use strict';

  angular
    .module('template')

    .directive('restuarant', function(){
    	return {
    		restrict : 'A',
            templateUrl: "app/myfav/partials/gd-myfavrestuarant.html"
    	
    	}
    })

    .directive('hotel', function(){
        return {
            restrict : 'A',
            templateUrl: "app/myfav/partials/gd-myfavhotel.html"
        
        }
    })

    ;

})();