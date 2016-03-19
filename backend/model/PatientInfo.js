var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientInfo = new Schema({
  number: Number,
  type: String
}, {
  versionKey: false
});

module.exports = mongoose.model('PatientInfo', PatientInfo);
