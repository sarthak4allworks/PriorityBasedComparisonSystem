$('document').ready(function(){

  $(".button4").click(function(){
    var a="",b="",c="",d="";
    if(($('#out1').css('display') == 'block') || ($('#out2').css('display') == 'block') || ($('#out3').css('display') == 'block') || ($('#out4').css('display') == 'block'))
    {
      if($('#out1').css('display') == 'block')
      {
        a = $('#cd1').attr('class');
        // alert(a);
      }
      if($('#out2').css('display') == 'block')
      {
        b = $('#cd2').attr('class');
        // alert(b);
      }
      if($('#out3').css('display') == 'block')
      {
        c = $('#cd3').attr('class');
        // alert(c);
      }
      if($('#out4').css('display') == 'block')
      {
        d = $('#cd4').attr('class');
        // alert(d);
      }
      alert(a+" "+b+" "+c+" "+d);
    }
    else {
      alert("Please select minimum one product");
    }
  });

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
          $('#exc').empty();
          for(var i=0 ; i<len ; i++)
          {
            $('.ex2').css('display', 'block');
            $('#exc').append('<tr><td><img src='+response[i].img+' alt="no laptop" width="50" height="50"></td><td class="searchPro"><a href=http://localhost:3000/pro/'+response[i].key+'>'+response[i].name+'</a></td></tr>');
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
          $('#exam1').empty();
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
  var screenArray = [];
  var screenResolutionArray = [];
  var cpuArray = [];
  var hdRPMArray = [];
  var hdArray = [];
  var ramArray = [];
  var osArray = [];
  var batteryArray = [];
  $(".common").click(function(){
    priceArray = [];
    brandsArray = [];
    screenArray = [];
    screenResolutionArray = [];
    cpuArray = [];
    hdRPMArray = [];
    hdArray = [];
    ramArray = [];
    osArray = [];
    batteryArray = [];
    $("input[name='price']:checked").each(function(){
      var pr = $(this).val();
      if(pr == "1")
      {
        priceArray.push("0");
        priceArray.push("25001");
      }
      if(pr == "2")
      {
        priceArray.push("25000");
        priceArray.push("30001");
      }
      if(pr == "3")
      {
        priceArray.push("30000");
        priceArray.push("40001");
      }
      if(pr == "4")
      {
        priceArray.push("40000");
        priceArray.push("50001");
      }
      if(pr == "5")
      {
        priceArray.push("50000");
        priceArray.push("70001");
      }
      if(pr == "6")
      {
        priceArray.push("70000");
        priceArray.push("100000");
      }
      if(pr == "7")
      {
        priceArray.push("100000");
        priceArray.push("120000");
      }
      if(pr == "8")
      {
        priceArray.push("70000");
        priceArray.push("999999");
      }
    });
    $("input[name='brand']:checked").each(function(){
      brandsArray.push($(this).val());
    });
    $("input[name='screen']:checked").each(function(){
      var scr = $(this).val();
      if(scr == "Yes")
      {
        screenArray.push(scr);
      }
      if(scr == "1")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("0 inches");
          screenArray.push("12 inches");
      }
      if(scr == "2")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("12 inches");
          screenArray.push("13 inches");
      }
      if(scr == "3")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("13 inches");
          screenArray.push("14 inches");
      }
      if(scr == "4")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("14 inches");
          screenArray.push("15 inches");
      }
      if(scr == "5")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("15 inches");
          screenArray.push("16 inches");
      }
      if(scr == "6")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("16 inches");
          screenArray.push("100 inches");
      }
    });
    $("input[name='screenresolution']:checked").each(function(){
      screenResolutionArray.push($(this).val());
    });
    $("input[name='cpu']:checked").each(function(){
      cpuArray.push($(this).val());
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
    $("input[name='os']:checked").each(function(){
      osArray.push($(this).val());
    });
    $("input[name='bb']:checked").each(function(){
      batteryArray.push($(this).val());
    });

    $.ajax({
      url: 'http://localhost:3000/filter',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          pr: priceArray,
          brand: brandsArray,
          scn: screenArray,
          screenresolution: screenResolutionArray,
          cpu: cpuArray,
          rpm: hdRPMArray,
          hd: hdArray,
          ram: ramArray,
          os: osArray,
          battery: batteryArray
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
