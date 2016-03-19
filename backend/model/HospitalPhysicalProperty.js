var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HospitalPhysicalProperty = new Schema({
  name: String,
  location: String
}, {
  versionKey: false
});

module.exports = mongoose.model('HospitalPhysicalProperty', HospitalPhysicalProperty);
