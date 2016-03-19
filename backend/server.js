// npm install
var express = require('express');
var mongoose = require('mongoose');

// DB Schema
var HospitalPhysicalProperty = require('./model/HospitalPhysicalProperty');
var SickbedRemain = require('./model/SickbedRemain');
var PatientInfo = require('./model/PatientInfo');
var HealthCarePeopleInfo = require('./model/HealthCarePeopleInfo');
var DrugRemain = require('./model/DrugRemain');
var BloodRemain = require('./model/BloodRemain');
var Ambulance = require('./model/Ambulance');

// route
var physical_route = require('./route/physical');
var sickbed_route = require('./route/sickbed');
var patient_route = require('./route/patient');
var healthcare_route = require('./route/healthcare');
var drug_route = require('./route/drug');
var blood_route = require('./route/blood');
var ambulance_route = require('./route/ambulance')

var app = express();

mongoose.connect('mongodb://localhost/medical');

console.log("===========================Server is starting===========================");

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static('../front_end'));

app.use('/physical', physical_route);
app.use('/sickbed', sickbed_route);
app.use('/patient', patient_route);
app.use('/healthcare', healthcare_route);
app.use('/drug', drug_route);
app.use('/blood', blood_route);
app.use('/ambulance', ambulance_route);

app.get('/', function(request, response) {
  console.log('I got you');
});

app.listen('8080', function(request, response) {
  console.log('listening to 8080 port');
});
