'use strict';

module.exports = function(app) {
  // google Routes

  console.log('initializing google routes')
  var googleController = require('../controllers/google.controller');

  app.route('/api/mySearchNearby').get(googleController.search);

};