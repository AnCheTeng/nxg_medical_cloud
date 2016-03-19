var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Ambulance = require('../model/Ambulance');

var router = express.Router();
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});

mongoose.createConnection('mongodb://localhost/medical');

router.route('/number')
  .get(parseUrlencoded, function(request, response) {
    Ambulance.find().exec(function(err, result) {
      response.send(result[0]);
    })
  });

router.route('/add/:num')
  .get(parseUrlencoded, function(request, response) {
    var num = parseInt(request.params.num);
    Ambulance.find().exec(function(err, result) {
      result[0].number = result[0].number + num;
      result[0].save();
      response.send(result[0]);
    })
  });

router.route('/minus/:num')
  .get(parseUrlencoded, function(request, response) {
    var num = parseInt(request.params.num);
    Ambulance.find().exec(function(err, result) {
      result[0].number = result[0].number - num;
      result[0].save();
      response.send(result[0]);
    })
  });

module.exports = router;
