(function( $ ){
  "use strict";

  var valid = {
    "text": function (that, options) {
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
    },
    "number": function (that, options) {
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
              console.log("type.Int err");
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
    },
    "email": function (that, options) {
      var settings = $.extend(
        {
          "size": 
          { 
            "min": 5, 
            "max": 64 
          }, 
        "regexp": 
          {
            "pat": "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\." +
         "[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
         "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+" +
         "[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          }
        }, 
        options);

      return valid.text(that, settings);
    },
    "password": function (that, options) {
      var value = $(that).val();
      var err = false;
      console.log($(that).val());

      if(! valid.text(that, { "size": options.size })){
        console.log("size err");
        err = true;
      }

      if(options.content){
        if(options.content.small){
          if(! valid.text(that, { "regexp": { "pat": "[a-z]" } })){
            console.log("content.small err");
            err = true;
          }        
        }
        if(options.content.big){
          if(! valid.text(that, { "regexp": { "pat": "[A-Z]" } })){
            console.log("content.big err");
            err = true;
          }         
        }
        if(options.content.digit){
          if(! valid.text(that, { "regexp": { "pat": "\\d" } })){
            console.log("content.digit err");
            err = true;
          }         
        }
        if(options.content.special){
          if(! valid.text(that, { "regexp": { "pat": "[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\=]" } })){
            console.log("content.special err");
            err = true;
          }        
        }

      }
      console.log(err);
      
      return !err;
    },
    "fields": function (that) {
      var err = false;
      console.log(that);

      $(that.field).each(function () { 
        var isValid = valid[ that.type ](this, that.options);

        if(!isValid){
          that.options.onNotValid(this);
          err = true;
        }
        else {
          that.options.onValid(this);
        }

      });

      return !err;
    }
  }

  var methods = {
    'init': function ( options ) {
      //init logic
      // var settings = $.extend( { text: 'Podaj wartość' }, options );
    },
    'text': function ( options ) {
      console.log(options);

      return this.each(function () {
        var isValid = valid.text(this, options);

        if(isValid){
          options.onValid(this);
        } 
        else {
          options.onNotValid(this);
        }
      });
    },
    'number': function ( options ) {
      console.log(options);

      return this.each(function () {
        var isValid = valid.number(this, options);

        if(isValid){
          options.onValid(this);
        } 
        else {
          options.onNotValid(this);
        }
      });
    },
    'email': function ( options ) {
      console.log(options);

      return this.each(function () {
        var isValid = valid.email(this, options);

        if(isValid){
          options.onValid(this);
        } 
        else {
          options.onNotValid(this); 
        }
      });
    },
    'password': function ( options ) {
      console.log(options);

      var settings = $.extend({
        "size":
        {
          "min": 8
        }, 
        "content":
        {
          "small": true, 
          "big": true,
          "digit": true,
          "special": false
        }
      }, options);

      console.log(settings);

      return this.each(function () {
        var isValid = valid.password(this, settings);

        if(isValid){
          options.onValid(this);
        } 
        else {
          options.onNotValid(this);
        }
      });
    },
    'form': function ( options ) {
      console.log(options);
      var err = false;

      options.fields.forEach(function( that, id ) {
        var isValid = valid.fields(that);

        if(!isValid){
          err = true;
        } 
      });

      if(err){
        options.onFormNotValid();
      } else {
        options.onFormValid();
      }

      return this;
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
      $.error('Method ' + method + ' does not exists in jQuery.valid');
    }
  };

})( jQuery );
