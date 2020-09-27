const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

require('../models/sfMoviesModel');

module.exports = {
    models : {
        SfMovies : mongoose.model('SfMovies')
    }
}