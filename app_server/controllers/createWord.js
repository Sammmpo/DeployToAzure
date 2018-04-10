const request = require('request');
const apiURL = require('./apiURLs');

const createWord = function(req, res){
    res.render('createWord', { title: 'Express' });
};

const showForm = function(req, res){
    res.render('createWord', { title: 'Express' });
};

const addData = function(req, res) {
    const path = '/api/word';

    const postdata = {
        word: req.body.word,
        definition: req.body.definition
    };

    const requestOptions = {
        url : apiURL.server + path,
        method : 'POST',
        json : postdata
    };

    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201)  {
                res.redirect('/search');
            } else {
                res.render('error', {message: 'Error adding data: ' +
                response.statusMessage +
                ' ('+ response.StatusCode + ')' });
            }
        }
    );
};

// const createWord = function(req, res){
//     res.render('createWord', { title: 'Express' });
// }
module.exports = {
    createWord,
    showForm,
    addData
};
