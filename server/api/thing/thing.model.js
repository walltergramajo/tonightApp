'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  title: String,
  date: String,
  category: String,
  location: String,
  body: String,
  promos: String,
  img : {
  	name : String
  	// path : {type:String, default:'../../'}
  },
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);