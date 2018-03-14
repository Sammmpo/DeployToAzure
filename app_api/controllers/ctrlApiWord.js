const mongoose = require('mongoose');

const wordModel = mongoose.model('word');

const wordList = function (req, res) {

    wordModel.find({}, function(err, words){
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(words);
        }
    });
};

const addWord = function (req, res) {
    wordModel.create(req.body, function(err, newWord){
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(201).json(newWord);
            }
        }
    );
};

module.exports = {
    wordList,
    addWord
}