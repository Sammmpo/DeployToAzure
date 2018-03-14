const mongoose = require('mongoose');

// const footballSchema = new mongoose.Schema({year:String, team:String});
// const goldenBallSchema = new mongoose.Schema({year:String, player:String, team:String});

const wordSchema = new mongoose.Schema({word:String, definition:String});

// mongoose.model('football', footballSchema);
// mongoose.model('goldenball', goldenBallSchema);

mongoose.model('word', wordSchema, 'word');