const express = require('express');
const router = express.Router();

const ctrlApiWord = require('../controllers/ctrlApiWord');

router
    .route('/word')
    .get(ctrlApiWord.wordList)
    .post(ctrlApiWord.addWord);

module.exports = router;