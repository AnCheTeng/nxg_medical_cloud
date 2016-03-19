$(document).ready(function() {
  $.get("/physical", (response)=>{
    $("#hospital-name").text(response.name);
    $("#location").text("Taipei City");
  });

  $.get("/sickbed/number/specialbed", (response)=>{
    $("#sickbed_o").text(response.number);
  });

  $.get("/patient/number/good", (response)=>{
    $("#patient_o").text(response.number);
  });

  $.get("/healthcare/number/doctor", (response)=>{
    $("#healthcare_o").text(response.number);
  });

  $.get("/drug/number/DrugA", (response)=>{
    $("#drug_o").text(response.number);
  });

  $.get("/blood/number/A", (response)=>{
    $("#blood_o").text(response.number);
  });

  $.get("/ambulance/number", (response)=>{
    $("#ambulance_o").text(response.number);
  });
})
