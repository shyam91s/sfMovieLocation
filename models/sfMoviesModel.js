'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SfMoviesSchema = new Schema({

    title : {
        type : String
    },
    location : {
        type : String
    },
    productionCompany :{
        type : String
    },
    director : {
        type : String
    },
    actor1 : {
        type : String
    },
    actor2 : {
        type : String
    },
    actor3 : {
        type : String
    },


}) 

module.exports = mongoose.model('SfMovies', SfMoviesSchema, 'location_sf');