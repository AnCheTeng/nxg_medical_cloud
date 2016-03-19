var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var HospitalPhysicalProperty = require('../model/HospitalPhysicalProperty');

var router = express.Router();
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});

mongoose.createConnection('mongodb://localhost/medical');

router.route('/')
  .get(parseUrlencoded, function(request, response) {
    HospitalPhysicalProperty.find().exec(function(err, result){
      response.send(result[0]);
    });
  });

router.route('/:name/:location')
  .get(parseUrlencoded, function(request, response) {
    HospitalPhysicalProperty.find().exec(function(err, result){
      result[0].name = request.params.name;
      result[0].location = request.params.location;
      result[0].save();
      response.send(result[0]);
    });
  });

module.exports = router;
