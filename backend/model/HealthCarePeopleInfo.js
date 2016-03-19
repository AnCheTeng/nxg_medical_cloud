var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HealthCarePeopleInfo = new Schema({
  number: Number,
  type: String
}, {
  versionKey: false
});

module.exports = mongoose.model('HealthCarePeopleInfo', HealthCarePeopleInfo);
