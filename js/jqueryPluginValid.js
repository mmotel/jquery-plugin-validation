(function( $ ){

  var validText = function (that, options) {
    var value = $(that).val();
    var err = false;
    console.log($(that).val());

    if(options.size){
      if(options.size.min){
        if(value.length < options.size.min){
          console.log("size.min err");
          err = true;
        }
      }
      if(options.size.max){
        if(value.length > options.size.max){
          console.log("size.max err");
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
      console.log(patt.test(value));
      if(!patt.test(value)){
        console.log("regexp err");
        err = true;
      }
    }
    console.log(err);
    
    return !err;
  }

  var validNumber = function (that, options) {
    var value = parseFloat($(that).val());
    var err = false;
    console.log(value);

    if( !isNaN(value) ){
      if(options.value && options.value.min){
        if(value < options.value.min){
          console.log("value.min err");
          err = true;
        }
      }
      if(options.value && options.value.max){
        if(value > options.value.max){
          console.log("value.max err");
          err = true;
        }
      }
      if(options.type){
        if(options.type === "Int"){
          if(value % 1 !== 0){
            console.log("type.Int err")
            err = true;
          }
        } //else if(options.type === "Float"){
          // ?
        //}
      }
    }
    else {
      err = true;
    }
    console.log(err);

    return !err;
  }

  var methods = {
    'init': function ( options ) {
      //init logic
      // var settings = $.extend( { text: 'Podaj wartość' }, options );
    },
    'text': function ( options ) {
      //show logic
      console.log(options);

      return this.each(function () {
        var isValid = validText(this, options);

        if(isValid){
          options.onValid(this);
        } 
        else {
          options.onNotValid(this);
        }
      });
    },
    'number': function ( options ) {
      //show logic
      console.log(options);

      return this.each(function () {
        var isValid = validNumber(this, options);

        if(isValid){
          options.onValid(this);
        } 
        else {
          options.onNotValid(this);
        }
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
