const request = require('request');
const apiURL = require('./apiURLs');

const wordlist = function(req, res) {
    const path = '/api/word';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body){
            if (err) {
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + ' ('+ response.statusCode + ')' });
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length) {
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('test', {words: body});
            }
        }
    )
};

const showForm = function(req, res){
    res.render('search', { title: 'Express' });
};

const deleteData = function(req, res) {
    const path = '/api/word';

    const deletedata = {
        word: req.body.word
    };

    const requestOptions = {
        url : apiURL.server + path,
        method : 'DELETE',
        json : deletedata
    };

    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201)  {
                res.redirect('/search');
            } else {
                res.render('error', {message: 'Error deleting data: ' +
                response.statusMessage +
                ' ('+ response.StatusCode + ')' });
            }
        }
    );
};

module.exports = {
    wordlist,
    showForm,
    deleteData
};