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
      //date field
      {
        "field": "#dateInput",
        "type": "date", 
        "options": { "range": { "from": new Date("2014-05-18"),
            "to": new Date("2014-06-01") }
        },
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
      },
      //password field (repeat)
      { "field": "#passwordRepeatInput", 
        "type": "password", 
        "options": 
        {
          "size": { "min": 8, "max": 32 }, 
          "content":
          { "small": true, "big": true, "digit": true, "special": true },
          "condition": function () {
            return $(this).val() === $('#passwordInput').val();  
          }
        },
        "callback": callback
      }
    ]
  },
  //form validation callback
  function( err ){
    if(err){
      $("#submitBtn").attr("disabled", "disabled");
    }
    else{
      $("#submitBtn").removeAttr("disabled");
    }
  },
  //trigger object
  {
    "bind": "change keyup"
  });

});
