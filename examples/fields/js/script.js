$(function() {
  "use strict";

  var fieldCallback = function ( err ) {
    if(err){
      if(err.empty) return;
      $(this).parent().addClass("has-error");      
    }
    else{
      $(this).parent().removeClass("has-error");
      $(this).parent().addClass("has-success");      
    }
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
          "pat": "^[A-Z]\\w+"
        },
      "condition": function () {
          return $(this).val() !== "Abc";
        }
      },
      fieldCallback);

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
      "condition": function () {
          return $(this).val() % 2 === 0;
        }
      },
      fieldCallback);

  });

  $('#emailInput').keyup(function (){

    $("#emailInput").valid("email",
      {
        "size":
          {
            "min": 8,
            "max": 64
          },
        "condition": function () {
            return $(this).val() !== "test@test.io";
          }
      }, fieldCallback);

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
        "condition": function () {
            return $(this).val() !== "P@ssw0rd";
          }
      },
      fieldCallback);

  });

});
