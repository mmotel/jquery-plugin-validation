$(function() {
  "use strict";

  var onValid = function (errType) {
    if(errType.empty) return;
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
    // console.log(errType);
  };

  var onNotValid = function (errType) {
    if(errType.empty) return;
    $(this).parent().addClass("has-error");
    // console.log(errType);
  };


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
          "pat": "^[A-Z]\\w+"
        },
      "onValid": onValid,
      "onNotValid": onNotValid 
      });

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
      });

  });

  $('#emailInput').keyup(function (){

    $("#emailInput").valid("email", 
      { 
      "onValid": onValid,
      "onNotValid": onNotValid 
      });

  });

  $('#passwordInput').keyup(function (){

    $("#passwordInput").valid("password", 
      {     
        "size":
        {
          "min": 8,
          "max": 32
        }, 
        "content":
        {
          "small": true,
          "big": true,
          "digit": true,
          "special": true
        },
      "onValid": onValid,
      "onNotValid": onNotValid 
      });

  });

});
