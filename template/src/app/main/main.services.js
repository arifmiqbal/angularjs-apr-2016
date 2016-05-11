(function(){
	'use strict';

	angular
		.module('template')
		.factory('MainResource', function($resource) {
		/*	var resourceOject = $resource('/api/users/auth/', {
			//	someID: 'abc'
			}, {
				signup: {
					method: 'PUT',
					headers: {
							'Content-Type': '...'
					},
					isArray: true
				},
				login: {
					method: 'POST',
					headers: {

					}
				}
			});




			*/


			var resourceOject = $resource('/assets/json/sampleData.json', null, {
				getPeople: {
					method: 'GET',
					isArray: true
				}
			});



			return resourceOject;







		});

})();