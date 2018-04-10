window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//sidebar.html

function displayDiv1()
{

    if(document.getElementById("sideleft11").style.display == "none")
        {
            document.getElementById("sideleft11").style.display = "block";
        }
    else{
        document.getElementById("sideleft11").style.display = "none";
    }
}

// below function is used to uncheck all the check box of the particular webpage
function uncheckAll()
{
    $('input[type="checkbox"]:checked').prop('checked',false);
}

function uncheckAllDiv1()
{
  var _this = this;
  $('#sideleft11').find('input[name="price"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv2()
{
    if(document.getElementById("sideleft12").style.display == "none")
        {
            document.getElementById("sideleft12").style.display = "block";
        }
    else{
        document.getElementById("sideleft12").style.display = "none";
    }
}

function uncheckAllDiv2()
{
  var _this = this;
  $('#sideleft12').find('input[name="brand"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv3()
{
    if(document.getElementById("sideleft13").style.display == "none")
        {
            document.getElementById("sideleft13").style.display = "block";
        }
    else{
        document.getElementById("sideleft13").style.display = "none";
    }
}

function uncheckAllDiv3()
{
  var _this = this;
  $('#sideleft13').find('input[name="type"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv4()
{
    if(document.getElementById("sideleft14").style.display == "none")
        {
            document.getElementById("sideleft14").style.display = "block";
        }
    else{
        document.getElementById("sideleft14").style.display = "none";
    }
}

function uncheckAllDiv4()
{
  var _this = this;
  $('#sideleft14').find('input[name="screen"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv5()
{
    if(document.getElementById("sideleft15").style.display == "none")
        {
            document.getElementById("sideleft15").style.display = "block";
        }
    else{
        document.getElementById("sideleft15").style.display = "none";
    }
}

function uncheckAllDiv5()
{
  var _this = this;
  $('#sideleft15').find('input[name="screenresolution"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv6()
{
    if(document.getElementById("sideleft16").style.display == "none")
        {
            document.getElementById("sideleft16").style.display = "block";
        }
    else{
        document.getElementById("sideleft16").style.display = "none";
    }
}

function uncheckAllDiv6()
{
  var _this = this;
  $('#sideleft16').find('input[name="cpu"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv7()
{
    if(document.getElementById("sideleft17").style.display == "none")
        {
            document.getElementById("sideleft17").style.display = "block";
        }
    else{
        document.getElementById("sideleft17").style.display = "none";
    }
}

function uncheckAllDiv7()
{
  var _this = this;
  $('#sideleft17').find('input[name="cpug"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv8()
{
    if(document.getElementById("sideleft18").style.display == "none")
        {
            document.getElementById("sideleft18").style.display = "block";
        }
    else{
        document.getElementById("sideleft18").style.display = "none";
    }
}

function uncheckAllDiv8()
{
  var _this = this;
  $('#sideleft18').find('input[name="cpus"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv9()
{
    if(document.getElementById("sideleft19").style.display == "none")
        {
            document.getElementById("sideleft19").style.display = "block";
        }
    else{
        document.getElementById("sideleft19").style.display = "none";
    }
}

function uncheckAllDiv9()
{
  var _this = this;
  $('#sideleft19').find('input[name="rpm"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv10()
{
    if(document.getElementById("sideleft110").style.display == "none")
        {
            document.getElementById("sideleft110").style.display = "block";
        }
    else{
        document.getElementById("sideleft110").style.display = "none";
    }
}

function uncheckAllDiv10()
{
  var _this = this;
  $('#sideleft110').find('input[name="hd"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivram()
{
    if(document.getElementById("sideleftram1").style.display == "none")
        {
            document.getElementById("sideleftram1").style.display = "block";
        }
    else{
        document.getElementById("sideleftram1").style.display = "none";
    }
}

function uncheckAllDivram()
{
  var _this = this;
  $('#sideleftram1').find('input[name="ram"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivgraphics()
{
    if(document.getElementById("sideleftgraphics1").style.display == "none")
        {
            document.getElementById("sideleftgraphics1").style.display = "block";
        }
    else{
        document.getElementById("sideleftgraphics1").style.display = "none";
    }
}

function uncheckAllDivgraphics()
{
  var _this = this;
  $('#sideleftgraphics1').find('input[name="graphics"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivfeatures()
{
    if(document.getElementById("sideleftfeatures1").style.display == "none")
        {
            document.getElementById("sideleftfeatures1").style.display = "block";
        }
    else{
        document.getElementById("sideleftfeatures1").style.display = "none";
    }
}

function uncheckAllDivfeatures()
{
  var _this = this;
  $('#sideleftfeatures1').find('input[name="features"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivos()
{
    if(document.getElementById("sideleftos1").style.display == "none")
        {
            document.getElementById("sideleftos1").style.display = "block";
        }
    else{
        document.getElementById("sideleftos1").style.display = "none";
    }
}

function uncheckAllDivos()
{
  var _this = this;
  $('#sideleftos1').find('input[name="os"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivbb()
{
    if(document.getElementById("sideleftbb1").style.display == "none")
        {
            document.getElementById("sideleftbb1").style.display = "block";
        }
    else{
        document.getElementById("sideleftbb1").style.display = "none";
    }
}

function uncheckAllDivbb()
{
  var _this = this;
  $('#sideleftbb1').find('input[name="bb"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivw()
{
    if(document.getElementById("sideleftw1").style.display == "none")
        {
            document.getElementById("sideleftw1").style.display = "block";
        }
    else{
        document.getElementById("sideleftw1").style.display = "none";
    }
}

function uncheckAllDivw()
{
  var _this = this;
  $('#sideleftw1').find('input[name="w"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function nextFun()
{
  var first = document.getElementById("fir").text;
  var second = document.getElementById("sec").text;
  var third = document.getElementById("thir").text;
  // alert(first+" "+second+" "+third);
  first = parseInt(first);
  second = parseInt(second);
  third = parseInt(third);
  document.getElementById("fir").text = first+1;
  document.getElementById("sec").text = second+1;
  document.getElementById("thir").text = third+1;
}

function prevFun()
{
  var first = document.getElementById("fir").text;
  var second = document.getElementById("sec").text;
  var third = document.getElementById("thir").text;
  // alert(first+" "+second+" "+third);
  first = parseInt(first);
  second = parseInt(second);
  third = parseInt(third);
  if(first != 1)
  {
    document.getElementById("fir").text = first-1;
    document.getElementById("sec").text = second-1;
    document.getElementById("thir").text = third-1;
  }
}

function openCompare(y)
{
  var x = document.getElementById("cone");
  if($('#cone').css('display') == 'none')
  {
    x.style.display = "block";
  }
  // debugger;
  var z = y.id;
  var xy = y.className;
  if($('#cdiv1').css('display') == 'block')
  {
    $(y).hide();
    $('#comp1.'+xy).show();
    $('#cdiv1').css('display', 'none');
    // var xz = "http://localhost:3000/pro/"+xy;
    // alert(xz);

    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: xy
        }
      ),
      success: function(response)
      {
        $('#td1').prepend('<div id="out1" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="1" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd1" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
    });

    // $('#out1').css('display', 'block');
  }
  else if($('#cdiv2').css('display') == 'block')
  {
    $(y).hide();
    $('#comp1.'+xy).show();
    $('#cdiv2').css('display', 'none');
    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: xy
        }
      ),
      success: function(response)
      {
        $('#td2').prepend('<div id="out2" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="2" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd2" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
    });
    // $('#out2').css('display', 'block');
  }
  else if($('#cdiv3').css('display') == 'block')
  {
    $(y).hide();
    $('#comp1.'+xy).show();
    $('#cdiv3').css('display', 'none');
    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: xy
        }
      ),
      success: function(response)
      {
        $('#td3').prepend('<div id="out3" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="3" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd3" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
    });
    // $('#out3').css('display', 'block');
  }
  else if($('#cdiv4').css('display') == 'block')
  {
    $(y).hide();
    $('#comp1.'+xy).show();
    $('#cdiv4').css('display', 'none');
    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: xy
        }
      ),
      success: function(response)
      {
        $('#td4').prepend('<div id="out4" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="4" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd4" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
    });
    // $('#out4').css('display', 'block');
  }
  else
  {
    alert("You can't compare more than 4 products at a time");
  }
}

function openCompare2(y)
{
  var z = y.id;
  var xy = y.className;
  if($('#cdiv1').css('display') == 'block')
  {
    $(y).hide();
    $('#comp1.'+z).show();
    $('#cdiv1').css('display', 'none');
    // var xz = "http://localhost:3000/pro/"+xy;
    // alert(xz);

    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: z
        }
      ),
      success: function(response)
      {
        $('#td1').prepend('<div id="out1" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="1" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd1" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
    });

    // $('#out1').css('display', 'block');
  }
  else if($('#cdiv2').css('display') == 'block')
  {
    var num1 = $('#1').text();
    // alert(num1);
    $(y).hide();
    $('#comp.'+z).hide();
    $('#comp1.'+z).show();
    // $('#cdiv2').css('display', 'none');
    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: z
        }
      ),
      success: function(response)
      {
        if(response.name == num1)
        {
          alert("This laptop is already selected for comparison, Please select any other laptop");
        }
        else{
          $('#cdiv2').css('display', 'none');
        $('#td2').prepend('<div id="out2" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="2" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd2" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
      }
    });
    // $('#out2').css('display', 'block');
  }
  else if($('#cdiv3').css('display') == 'block')
  {
    var num1 = $('#1').text();
    var num2 = $('#2').text();
    $(y).hide();
    $('#comp.'+z).hide();
    $('#comp1.'+z).show();
    // $('#cdiv3').css('display', 'none');
    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: z
        }
      ),
      success: function(response)
      {
        if(response.name == num1 || response.name == num2)
        {
          alert("This laptop is already selected for comparison, Please select any other laptop");
        }
        else {
          $('#cdiv3').css('display', 'none');
          $('#td3').prepend('<div id="out3" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="3" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd3" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
        }
      }
    });
    // $('#out3').css('display', 'block');
  }
  else if($('#cdiv4').css('display') == 'block')
  {
    var num1 = $('#1').text();
    var num2 = $('#2').text();
    var num3 = $('#3').text();
    $(y).hide();
    $('#comp.'+z).hide();
    $('#comp1.'+z).show();
    $.ajax({
      url: "http://localhost:3000/ajo",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          KEY: z
        }
      ),
      success: function(response)
      {
        if(response.name == num1 || response.name == num2 || response.name == num3)
        {
          alert("This laptop is already selected for comparison, Please select any other laptop");
        }
        else {
          $('#cdiv4').css('display', 'none');
        $('#td4').prepend('<div id="out4" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a id="4" href="http://localhost:3000/pro/'+response.key+'">'+response.name+'</a></center></div><div class="cdcross"><a id="cd4" class="'+response.key+'" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
      }
      }
    });
    // $('#out4').css('display', 'block');
  }
  else
  {
    alert("You can't compare more than 4 products at a time");
  }
}

function openCompare1(x)
{
  var z = x.className;
  $('#comp1.'+z).hide();
  $('#comp.'+z).show();
  $.ajax({
    url: "http://localhost:3000/ajo",
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(
      {
        KEY: z
      }
    ),
    success: function(response)
    {
      // debugger;
      var name = response.name;
      var txt = $("#1").text();
      if(name == txt)
      {
        $('#out1').hide();
        $('#cdiv1').show();
      }
      else {
        txt = $('#2').text();
        if(name == txt)
        {
          $('#out2').hide();
          $('#cdiv2').show();
        }
        else {
          txt = $('#3').text();
          if(name == txt)
          {
            $('#out3').hide();
            $('#cdiv3').show();
          }
          else {
            $('#out4').hide();
            $('#cdiv4').show();
          }
        }
      }
      // $('#td4').prepend('<div id="out4" class="out1"><div class="cd1img"><center><img src="'+response.img+'" alt="no image" height="55px" width="40px"></center></div><div class="cd2name"><center><a href="#">'+response.name+'</a></center></div><div class="cdcross"><a id="cd4" href="#" onclick="hd(this)"><span class="glyphicon glyphicon-remove"></span></a></div></div>');
    }
  });
}

function hd(x)
{
  // debugger;
    var id = x.id;
    var num = id.slice(-1);
    var c = x.className;
    // alert(c);
    // document.getElementById("comp1").className = c;
    $('#comp1.'+c).hide();
    $('#comp.'+c).show();
    var id1 = "out"+num;
    var id2 = "cdiv"+num;
    var x = document.getElementById(id1);
    var y = document.getElementById(id2);
    x.style.display = "none";
    y.style.display = "block";
}

function gyb()
{
    var x = document.getElementById("cone");
    
    x.style.display = "none";
}
