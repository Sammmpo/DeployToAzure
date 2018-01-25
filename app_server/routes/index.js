var express = require('express');
var router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/main');
const ctrlRegister = require('../controllers/register');
const ctrlLogin = require('../controllers/login');
const ctrlCreateWord = require('../controllers/createWord');

const ctrlTest = require('../controllers/test');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index, ctrlMain.asd);
router.get('/register', ctrlRegister.register);
router.get('/login', ctrlLogin.login);
router.get('/createWord', ctrlCreateWord.createWord);

router.get('/test', ctrlTest.winnerlist);

module.exports = router;
