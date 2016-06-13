(function() {
  'use strict';

  angular
    .module('template')
    
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATES) {

    $stateProvider
    .state(STATES.kHomeState, {
      url: '/',
      templateUrl: 'app/home/partials/home.main.html',
      controller: 'HomeController as ctrl'
    })
    .state(STATES.kContactsState, {
      url: '/contacts',
      templateUrl: 'app/contacts/partials/contacts.main.html',
      controller: 'ContactsController as ctrl'
    })
    .state(STATES.kMyFavState, {
      url: '/myfav',
      templateUrl: 'app/myfav/partials/myfav.main.html',
      controller: 'MyFavController as ctrl'
    });


    $urlRouterProvider.otherwise('/');
  }

})();


