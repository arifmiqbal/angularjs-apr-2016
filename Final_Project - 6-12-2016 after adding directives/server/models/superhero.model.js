'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var SuperheroSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: ''
  },
  profileImage: {
    type: String,
    trim: true
  }

});

mongoose.model('Superhero', SuperheroSchema);
