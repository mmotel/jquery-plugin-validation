$(function() {

  var onValid = function (that) {
    $(that).parent().addClass("has-error");
  }

  var onNotValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
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

});