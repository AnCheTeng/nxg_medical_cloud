var mongoose = require('mongoose');

// DB Schema
var HospitalPhysicalProperty = require('./model/HospitalPhysicalProperty');
var SickbedRemain = require('./model/SickbedRemain');
var PatientInfo = require('./model/PatientInfo');
var HealthCarePeopleInfo = require('./model/HealthCarePeopleInfo');
var DrugRemain = require('./model/DrugRemain');
var BloodRemain = require('./model/BloodRemain');
var Ambulance = require('./model/Ambulance');

mongoose.connect('mongodb://localhost/medical');

var hospitalname = "臺大醫院";
var locate = "0";

var specialbed_num = 10;
var ICUbed_num = 5;
var normalbed_num = 50;

var badpatient_num = 3;
var goodpatient_num = 10;

var doctor_num = 3;
var nurse_num = 5;
var care_num = 10;

var drug_A_num = 100;
var drug_B_num = 150;
var drug_C_num = 200;

var A_num = 200;
var B_num = 400;
var AB_num = 500;
var O_num = 300;

var ambulance_num = 3;

HospitalPhysicalProperty.remove({}, function() {});
SickbedRemain.remove({}, function() {});
PatientInfo.remove({}, function() {});
HealthCarePeopleInfo.remove({}, function() {});
DrugRemain.remove({}, function() {});
BloodRemain.remove({}, function() {});
Ambulance.remove({}, function() {});


new HospitalPhysicalProperty({
  name: hospitalname,
  location: locate
}).save();

new SickbedRemain({
  number: specialbed_num,
  type: "Special"
}).save();

new SickbedRemain({
  number: ICUbed_num,
  type: "ICU"
}).save();

new SickbedRemain({
  number: normalbed_num,
  type: "Normal"
}).save();

new PatientInfo({
  number: badpatient_num,
  type: "Good"
}).save();

new PatientInfo({
  number: goodpatient_num,
  type: "Bad"
}).save();

new HealthCarePeopleInfo({
  number: doctor_num,
  type: "Doctor"
}).save();

new HealthCarePeopleInfo({
  number: nurse_num,
  type: "Nurse"
}).save();


new HealthCarePeopleInfo({
  number: care_num,
  type: "MedicalCare"
}).save();


new DrugRemain({
  number: drug_A_num,
  name: "DrugA"
}).save();

new DrugRemain({
  number: drug_B_num,
  name: "DrugB"
}).save();

new DrugRemain({
  number: drug_C_num,
  name: "DrugC"
}).save();

new BloodRemain({
  number: A_num,
  type: "A"
}).save();

new BloodRemain({
  number: B_num,
  type: "B"
}).save();

new BloodRemain({
  number: AB_num,
  type: "AB"
}).save();

new BloodRemain({
  number: O_num,
  type: "O"
}).save();

new Ambulance({
  number: ambulance_num
}).save();

setTimeout(function() {
  mongoose.disconnect();
}, 5000);
