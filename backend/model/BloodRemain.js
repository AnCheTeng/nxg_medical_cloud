var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BloodRemain = new Schema({
  number: Number,
  type: String
}, {
  versionKey: false
});

module.exports = mongoose.model('BloodRemain', BloodRemain);
