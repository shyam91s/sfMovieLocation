var express = require('express');
var router = express.Router();
var sfMoviesController = require('../controllers/sfMoviesController');

/* Gets Movie Shooting location in SF. */ 
router.get('/', sfMoviesController.getAllSfMovies);

module.exports = router;