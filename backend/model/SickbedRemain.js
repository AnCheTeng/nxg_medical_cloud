var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SickbedRemain = new Schema({
  number: Number,
  type: String,
}, {
  versionKey: false
});

module.exports = mongoose.model('SickbedRemain', SickbedRemain);
