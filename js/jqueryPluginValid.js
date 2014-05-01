(function( $ ){

  var methods = {
    'init': function ( options ) {
      //init logic
      // var settings = $.extend( { text: 'Podaj wartość' }, options );
    },
    'text': function ( options ) {
      //show logic
      console.log(options);

      return this.each(function () {
        // $(this).keyup(function (){ 

          var value = $(this).val();
          var err = false;
          console.log($(this).val());

          if(options.size){
            if(options.size.min){
              if(value.length < options.size.min){
                console.log("size.min err");
                $(this).parent().addClass("has-error");
                err = true;
              }
            }
            if(options.size.max){
              if(value.length > options.size.max){
                console.log("size.max err");
                $(this).parent().addClass("has-error");
                err = true;
              }
            }
          }
          if(options.regexp && options.regexp.pat){
            var patt;
            if(options.regexp.mod){
              patt = new RegExp(options.regexp.pat, options.regexp.mod);
            } else{
              patt = new RegExp(options.regexp.pat);
            }
            console.log(patt);
            if(!patt.test(value)){
              console.log("regexp err");
              $(this).parent().addClass("has-error");
              err = true;
            }
          }
          console.log(err);
          if(!err){
            $(this).parent().removeClass("has-error");
            $(this).parent().addClass("has-success");
          }

        // });
      });
    }
  };
  
  $.fn.valid = function ( method ) {
    if( methods[ method ] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    }
    else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    }
    else {
      $.error('Method ' + method + ' does not exists in jQuery.myPlugin');
    }
  };

})( jQuery );

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
    } 
  });//.css({"background": "red"});