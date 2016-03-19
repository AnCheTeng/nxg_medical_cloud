var mongoose = require('mongoose');

// DB Schema
var HospitalPhysicalProperty = require('./model/HospitalPhysicalProperty');
var SickbedRemain = require('./model/SickbedRemain');
var PatientInfo = require('./model/PatientInfo');
var HealthCarePeopleInfo = require('./model/HealthCarePeopleInfo');
var DrugRemain = require('./model/DrugRemain');
var BloodRemain = require('./model/BloodRemain');
var Ambulance = require('./model/Ambulance');


var hospitalname = "臺大醫院";
var location;

var specialbed_num;
var ICUbed_num;
var normalbed_num;

var badpatient_num;
var goodpatient_num;

var doctor_num;
var nurse_num;
var care_num;

var drug_A_name;
var drug_B_name;
var drug_C_name;

var A_num;
var B_num;
var AB_num;
var O_num;

var ambulance_num;
