var express = require('express');
var router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/main');
const ctrlTest = require('../controllers/test'); // ... for the list of World Cup winners (countries)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);
router.get('/test', ctrlTest.winnerlist);  // List of World Cup winners (countries)

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
