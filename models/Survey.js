var mongoose = require('mongoose');


var SurveySchema = new mongoose.Schema({
  name: String,
   age: String,
   gender: String,
   software: String,
   otherSoftware: String,
   features: String,
   wantedFeatures: String
});


module.exports = mongoose.model('Survey', SurveySchema);
