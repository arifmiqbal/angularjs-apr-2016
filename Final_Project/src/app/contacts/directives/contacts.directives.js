(function() {
  'use strict';

  angular
    .module('template')

    .directive('contacts', function(){
    	return {
    		restrict : 'A',
    		templateUrl: "app/contacts/partials/gd-contacts.html"
    		//controller: "controllerName as ctrl" IF YOU WANT TO USE A CONTROLLER FROM HERE
    		//scope: false USE SAME SCOPE AND APPEND ONLY IF YOU SAY "AS" ctrl
    		//scope: true CREATES A CHILD SCOPE

    	}
    })

    ;

})();