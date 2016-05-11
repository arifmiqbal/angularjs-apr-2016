(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainResource) {
    var self = this;
    self.greeting = "Hola Arif!";

    var resourceObject = MainResource;

    self.makeRequest = function(){
      resourceObject.getPeople({
        page:'0',
        numResults: 55
      }).$promise
      .then(function onSuccess(response){
        self.people = response;
        console.log('SUCCESS:', response)
      }, function onError(errorMessage) {
        console.log('ERROR:', errorMessage)
      });
   // resourceObject.getPeople();
  };
}

})();
