$(document).ready(function() {
  $.get("/physical", (response)=>{
    $("#hospital-name").text(response.name);
    $("#location").text("Taipei City");
  });

  $.get("/sickbed/number/Special", (response)=>{
    $("#sickbed_o").text(response.number);
  });

  $.get("/patient/number/Good", (response)=>{
    $("#patient_o").text(response.number);
  });

  $.get("/healthcare/number/Doctor", (response)=>{
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


  $("select").change(function() {
    var change = $(this).val();
    var api = "/"+$(this).data("api")+"/number/"+change;
    var output = "#"+$(this).data("api")+"_o";

    $.get(api, (response)=>{
      $(output).text(response.number);
    })
  })



})
