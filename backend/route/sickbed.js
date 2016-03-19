var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var SickbedRemain = require('../model/SickbedRemain');

var router = express.Router();
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});

mongoose.createConnection('mongodb://localhost/medical');

router.route('/number/:type')
  .get(parseUrlencoded, function(request, response) {
    var type = request.params.type;
    SickbedRemain.findOne({
      type: type
    }).exec(function(err, result) {
      response.send(result.number);
    })
  });

router.route('/add/:type/:num')
  .get(parseUrlencoded, function(request, response) {
    var type = request.params.type;
    var num = request.params.num;
    SickbedRemain.findOne({
      type: type
    }).exec(function(err, result) {
      result.number = result.number + num;
      result.save();
      response.send(result.number);
    })
  });

router.route('/minus/:type/:num')
  .get(parseUrlencoded, function(request, response) {
    var type = request.params.type;
    var num = request.params.num;
    SickbedRemain.findOne({
      type: type
    }).exec(function(err, result) {
      result.number = result.number - num;
      result.save();
      response.send(result.number);
    })
  });

module.exports = router;
