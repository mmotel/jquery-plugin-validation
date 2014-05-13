$(function() {
  "use strict";

  var onValid = function (errType) {
    if(errType.empty) return;
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
  };

  var onNotValid = function (errType) {
    if(errType.empty) return;
    $(this).parent().addClass("has-error");
  };

  var onFormValid = function () {
    console.log("form is valid.");
    $("#submitBtn").removeAttr("disabled"); 
  };

  var onFormNotValid = function () {
    console.log("form is not valid.");
    $("#submitBtn").attr("disabled", "disabled");
  };

  $("#textInput, #numberInput, #emailInput, #passwordInput").keyup(function (){

    $().valid("form", {
      "fields": [
        //text field
        { "field": "#textInput", 
          "type": "text", 
          "options": 
          {
            "size": { "min": 6, "max": 64 },
            "regexp": { "pat": "^[A-Z]\\w+" },
            "onValid": onValid,
            "onNotValid": onNotValid 
          }
        },
        //number field
        { "field": "#numberInput", 
          "type": "number", 
          "options": 
          {
            "value": { "min": 10, "max": 100 },
            "type": "Int",
            "onValid": onValid,
            "onNotValid": onNotValid 
          }
        },
        //email field
        { "field": "#emailInput", 
          "type": "email", 
          "options": 
          {
            "onValid": onValid,
            "onNotValid": onNotValid 
          }
        },
        //password field
        { "field": "#passwordInput", 
          "type": "password", 
          "options": 
          {
            "size": { "min": 8, "max": 32 }, 
            "content":
            { "small": true, "big": true, "digit": true, "special": true },
            "onValid": onValid,
            "onNotValid": onNotValid 
          }
        }
      ],
      // //validation callbacks
      // "onFormValid": onFormValid,
      // "onFormNotValid": onFormNotValid
    },
    function ( err ) {
      if(err){
        onFormNotValid();
      }
      else{
        onFormValid();
      }
    });
    
  });

});
