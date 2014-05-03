$(function() {

  var onValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
  }

  var onNotValid = function (that) {
    $(that).parent().addClass("has-error");
  }


  $('#textInput').keyup(function (){

    $("#textInput").valid("text", 
      { 
      "size": 
        { 
          "min": 2, 
          "max": 10 
        }, 
      "regexp": 
        {
          "pat": "[A-Z]\\w+"
        },
      "onValid": onValid,
      "onNotValid": onNotValid 
      });//.css({"background": "red"});

  });

  $('#numberInput').keyup(function (){

    $("#numberInput").valid("number", 
      { 
      "value": 
        { 
          "min": 10, 
          "max": 100 
        }, 
      "type": "Int",
      "onValid": onValid,
      "onNotValid": onNotValid 
      });//.css({"background": "red"});

  });



  $('#emailInput').keyup(function (){

    $("#emailInput").valid("email", 
      { 
      "onValid": onValid,
      "onNotValid": onNotValid 
      });//.css({"background": "red"});

  });

});
