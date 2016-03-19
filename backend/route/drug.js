var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DrugRemain = require('../model/DrugRemain');

var router = express.Router();
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});

mongoose.createConnection('mongodb://localhost/medical');

router.route('/number/:name')
  .get(parseUrlencoded, function(request, response) {
    var name = request.params.name;
    DrugRemain.findOne({
      name: name
    }).exec(function(err, result) {
      response.send(result.number);
    })
  });

router.route('/add/:name/:num')
  .get(parseUrlencoded, function(request, response) {
    var name = request.params.name;
    var num = request.params.num;
    DrugRemain.findOne({
      name: name
    }).exec(function(err, result) {
      result.number = result.number + num;
      result.save();
      response.send(result.number);
    })
  });

router.route('/minus/:name/:num')
  .get(parseUrlencoded, function(request, response) {
    var name = request.params.name;
    var num = request.params.num;
    DrugRemain.findOne({
      name: name
    }).exec(function(err, result) {
      result.number = result.number - num;
      result.save();
      response.send(result.number);
    })
  });

module.exports = router;
