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
    //
    // var clo = $(this).parent().parent().children("div").last().children("input").val();
    // console.log(clo);
  });

  $(".add").on('click', function() {
    var manipulate_num = parseInt($(this).parent().parent().children("div").last().children("input").val());
    if (isNaN(manipulate_num)) {
      alert("Please enter a number!");
    } else {
      var apiname = $(this).parent().parent().children("div").first().next().children("select").data("api");
      if(apiname!=null){
        var type = $(this).parent().parent().children("div").first().next().children("select").val();
        var api = "/"+apiname+"/add/"+type+"/"+manipulate_num;
        var output = "#"+apiname+"_o";
        $.get(api, (response)=>{
          $(output).text(response.number);
        });
      } else {
        var api = "/ambulance/add/"+manipulate_num;
        var output = "#ambulance_o";
        $.get(api, (response)=>{
          $(output).text(response.number);
        });
      }
    }
  });

  $(".minus").on('click', function() {
    var manipulate_num = parseInt($(this).parent().parent().children("div").last().children("input").val());
    if (isNaN(manipulate_num)) {
      alert("Please enter a number!");
    } else {
      var apiname = $(this).parent().parent().children("div").first().next().children("select").data("api");
      if(apiname!=null){
        var type = $(this).parent().parent().children("div").first().next().children("select").val();
        var api = "/"+apiname+"/minus/"+type+"/"+manipulate_num;
        var output = "#"+apiname+"_o";
        $.get(api, (response)=>{
          $(output).text(response.number);
        });
      } else {
        var api = "/ambulance/minus/"+manipulate_num;
        var output = "#ambulance_o";
        $.get(api, (response)=>{
          $(output).text(response.number);
        });
      }
    }
  });

})
