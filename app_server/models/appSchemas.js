const mongoose = require('mongoose');

const footballSchema = new mongoose.Schema({year:"string", team:"string"});
const goldenBallSchema = new mongoose.Schema({year:"string", player:"string", team:"string"});

mongoose.model('football', footballSchema);
mongoose.model('goldenball', goldenBallSchema);