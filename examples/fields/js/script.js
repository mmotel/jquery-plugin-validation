$(function() {
  "use strict";

  var fieldCallback = function ( err ) {
    if(err){
      console.log(err);
      if(err.empty) return;
      $(this).parent().addClass("has-error");      
    }
    else{
      $(this).parent().removeClass("has-error");
      $(this).parent().addClass("has-success");      
    }
  }


  $('#textInput').bind("change keyup", function (){

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

  $('#numberInput').bind("change keyup", function (){

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

  $('#emailInput').bind("change keyup", function (){

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

  $('#passwordInput').bind("change keyup", function (){

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

  $('#dateInput').bind("change keyup", function (){

    $("#dateInput").valid("date", 
      {     
        "range":
        {
          "from": new Date("2014-05-18"),
          "to": new Date("2014-06-01")
        }
      },
      fieldCallback);

  });

});
