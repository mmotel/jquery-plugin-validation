$(function() {
  "use strict";

  var callback = function ( err ) {
    if(err){
      if(err.empty) return;
      $(this).parent().addClass("has-error");
    }
    else{
      $(this).parent().removeClass("has-error");
      $(this).parent().addClass("has-success");
    }
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
          },
          "callback": callback
        },
        //number field
        { "field": "#numberInput", 
          "type": "number", 
          "options": 
          {
            "value": { "min": 10, "max": 100 },
            "type": "Int",
          },
          "callback": callback
        },
        //email field
        { "field": "#emailInput", 
          "type": "email", 
          "options": {},
          "callback": callback
        },
        //password field
        { "field": "#passwordInput", 
          "type": "password", 
          "options": 
          {
            "size": { "min": 8, "max": 32 }, 
            "content":
            { "small": true, "big": true, "digit": true, "special": true },
          },
          "callback": callback
        }
      ]
    },
    function( err ){
      if(err){
        $("#submitBtn").attr("disabled", "disabled");
      }
      else{
        $("#submitBtn").removeAttr("disabled");
      }
    });
    
  });

});
