'use strict';

const blogic = require('../lib/blogic');

module.exports = {
    getAllSfMovies : function(req, res) {
        getAllSfMovies(req, res);
    }
}

/**
 *   HANDLE ERROR MESSAGES
 */
async function processErrorMessage(err, res) {
    let resObj = {
      success: false,
      message: err.message
    };
    return res.status(err.code ? err.code : 500).json(resObj);
}

var getAllSfMovies = async function(req, res) {
    try {
        var resObj = await blogic.sfMovies.getSFMovies();
        resObj.status = 'success';
        return res.status(200).json(resObj);
    } catch (err){
        return processErrorMessage(err, res);
    }
}