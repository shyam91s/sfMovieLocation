'use strict';

var config = require('../../config/global');
const mongodb = config.mongodb;

var SfMovies = mongodb.models.SfMovies;

var sfMovies = {
    getSfMovieLocation : async function (query) {
        try {
            let movieLocationQuery = SfMovies.find(query);
            return await movieLocationQuery.exec();
        }catch (err) {
            throw err;
        }
    }
}

module.exports = {
    sfMovies : sfMovies
}