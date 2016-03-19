var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrugRemain = new Schema({
  name: String,
  number: Number
}, {
  versionKey: false
});

module.exports = mongoose.model('DrugRemain', DrugRemain);
