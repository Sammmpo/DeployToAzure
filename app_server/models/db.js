const mongoose = require('mongoose');

const dbURI = 'mongodb://Guest:password@ds012178.mlab.com:12178/dank';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ${dbURI}');
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');