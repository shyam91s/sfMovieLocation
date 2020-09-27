'use strict';

const storage = require('./storage').mongoDB;
const mongoose = require('mongoose');

require('dotenv').config();

let sfMovies = {
    getSFMovies : async function (query) {
        try {
            if(!query) {
                query = {};
            }

            let sfMoviesLocation = await storage.sfMovies.getSfMovieLocation(query);
            return {
                success: true,
                result: sfMoviesLocation
              };
        } catch (err) {
            throw err;
        }
    }
}

module.exports = {
    sfMovies : sfMovies
}