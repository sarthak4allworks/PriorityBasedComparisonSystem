$('document').ready(function(){
  // alert("We are here");
  $(".inpu1").keyup(function(){
    //  debugger;
    var v = $(".inpu1").val();
    $.ajax({
      url: 'http://localhost:3000/search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          dat: v
        }
      ),
      success: function(response)
      {
        // alert("here in ajax "+response[0].img);
        console.log("Success "+response.length);
        var len = response.length;
        // alert("response from server is "+response);
        // alert("length is "+len+" "+v.length);
        var ln = v.length;
        if(ln>0)
        {
          // alert("Inside here");
          for(var i=0 ; i<len ; i++)
          {
              // $('.ex2').empty();
            $('.ex2').css('display', 'block');
            $('#exc').append('<tr><td class="searchPro"><a href=http://localhost:3000/pro/'+response[i].key+'>'+response[i].name+'</a></td></tr>');
          }
        }
        else {
          $('.ex2').css('display', 'none');
        }
      }
    });
  });

  $("#search1").keyup(function(){
    //  debugger;
    // alert("We are here");
    var v = $("#search1").val();
    // alert(v);
    $.ajax({
      url: 'http://localhost:3000/search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          dat: v
        }
      ),
      success: function(response)
      {
        // alert("here in ajax "+response[0].img);
        console.log("Success "+response.length);
        var len = response.length;
        // alert("response from server is "+response);
        // alert("length is "+len+" "+v.length);
        var ln = v.length;
        if(ln>0)
        {
          // alert("Inside here");
          for(var i=0 ; i<len ; i++)
          {
              // $('.ex2').empty();
            $('#exam1').css('display', 'block');
            $('#exam1').append('<tr><td id='+response[i].key+' onclick="openCompare2(this)" class='+response[i].key+'><a href="#">'+response[i].name+'</a></td></tr>');
          }
        }
        else {
          $('#exam1').css('display', 'none');
        }
      }
    });
  });

  var priceArray = [];
  var brandsArray = [];
  // var typeArray = [];
  var screenArray = [];
  var screenResolutionArray = [];
  var cpuArray = [];
  var cpuSpeedArray = [];
  var cpuGenerationArray = [];
  var hdRPMArray = [];
  var hdArray = [];
  var ramArray = [];
  var graphicsArray = [];
  var featuresArray = [];
  var osArray = [];
  var batteryArray = [];
  var weightArray = [];
  $(".common").click(function(){
    priceArray = [];
    brandsArray = [];
    // typeArray = [];
    screenArray = [];
    screenResolutionArray = [];
    cpuArray = [];
    cpuSpeedArray = [];
    cpuGenerationArray = [];
    hdRPMArray = [];
    hdArray = [];
    ramArray = [];
    graphicsArray = [];
    featuresArray = [];
    osArray = [];
    batteryArray = [];
    weightArray = [];
    $("input[name='price']:checked").each(function(){
      priceArray.push($(this).val());
    });
    $("input[name='brand']:checked").each(function(){
      brandsArray.push($(this).val());
    });
    // $("input[name='type']:checked").each(function(){
    //   typeArray.push($(this).val());
    // });
    $("input[name='screen']:checked").each(function(){
      screenArray.push($(this).val());
    });
    $("input[name='screenresolution']:checked").each(function(){
      screenResolutionArray.push($(this).val());
    });
    $("input[name='cpu']:checked").each(function(){
      cpuArray.push($(this).val());
    });
    $("input[name='cpug']:checked").each(function(){
      cpuSpeedArray.push($(this).val());
    });
    $("input[name='cpus']:checked").each(function(){
      cpuGenerationArray.push($(this).val());
    });
    $("input[name='rpm']:checked").each(function(){
      hdRPMArray.push($(this).val());
    });
    $("input[name='hd']:checked").each(function(){
      hdArray.push($(this).val());
    });
    $("input[name='ram']:checked").each(function(){
      ramArray.push($(this).val());
    });
    $("input[name='graphics']:checked").each(function(){
      graphicsArray.push($(this).val());
    });
    $("input[name='features']:checked").each(function(){
      featuresArray.push($(this).val());
    });
    $("input[name='os']:checked").each(function(){
      osArray.push($(this).val());
    });
    $("input[name='bb']:checked").each(function(){
      batteryArray.push($(this).val());
    });
    $("input[name='w']:checked").each(function(){
      weightArray.push($(this).val());
    });
    // alert(priceArray);
    // alert(brandsArray);

    $.ajax({
      url: 'http://localhost:3000/filter',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          pr: priceArray,
          brand: brandsArray,
          // type: typeArray,
          scn: screenArray,
          screenresolution: screenResolutionArray,
          cpu: cpuArray,
          cpuSpeed: cpuSpeedArray,
          cpuGeneration: cpuGenerationArray,
          rpm: hdRPMArray,
          hd: hdArray,
          ram: ramArray,
          graphics: graphicsArray,
          features: featuresArray,
          os: osArray,
          battery: batteryArray,
          weight: weightArray
        }
      ),
      success: function(response)
      {
        console.log("Success "+response);
        alert("response from server is "+response);
        // alert("Success");
      }
    });
  });
});
