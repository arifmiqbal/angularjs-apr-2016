(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;
    self.greeting = "Hello World";


    self.folders = [{
    	name: 'Folder 1',
    	items: ['item1', 'item2', 'item3']
    }, {
    	name: 'Folder 2',
    	items: ['item1', 'item2', 'item3']
    }, {
    	name: 'Folder 3',
    	items: ['item1', 'item2', 'item3']
    }]
  }

})();
