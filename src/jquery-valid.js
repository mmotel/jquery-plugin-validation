/*
  Version: 0.4.0 BETA
  Release date: 22.05.2014
  Copyright (c) Mateusz Motel 
*/

(function( $ ){
  "use strict";

  var valid = {
    "text": function (that, options) {
      var value = $(that).val();
      var err = false;
      var errType = {};
      // //console.log($(that).val());

      if(value.length === 0){
        errType.empty = true;
      }

      if(options.size){
        if(options.size.min){
          if(value.length < options.size.min){
            // //console.log("size.min err");
            err = true;
            if(!errType.size){ errType.size = {}; }
            errType.size.min = true;
          }
        }
        if(options.size.max){
          if(value.length > options.size.max){
            // //console.log("size.max err");
            err = true;
            if(!errType.size){ errType.size = {}; }
            errType.size.max = true;
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
        // //console.log(patt);
        // //console.log(patt.test(value));
        if(!patt.test(value)){
          // //console.log("regexp err");
          err = true;
          errType.regexp = true;
        }
      }
      if(options.condition){
        if(! options.condition.call(that, {}) ){
          err = true;
          errType.condition = true;
        }
      }
      //console.log(err);
      
      // console.log(errType);

      return { "valid": !err, "errType": errType };
    },
    "number": function (that, options) {
      var value = parseFloat($(that).val());
      var err = false;
      var errType = {};
      // //console.log($(that).val());

      if($(that).val().length === 0){
        errType.empty = true;
      }

      if( !isNaN(value) ){
        if(options.value && options.value.min){
          if(value < options.value.min){
            //console.log("value.min err");
            err = true;
            if(!errType.value){ errType.value = {}; }
            errType.value.min = true;
          }
        }
        if(options.value && options.value.max){
          if(value > options.value.max){
            //console.log("value.max err");
            err = true;
            if(!errType.value){ errType.value = {}; }
            errType.value.max = true;            
          }
        }
        if(options.type){
          if(options.type === "Int"){
            if(value % 1 !== 0){
              //console.log("type.Int err");
              err = true;
              errType.type = true;
            }
          } //else if(options.type === "Float"){
            // ?
          //}
        }
        if(options.condition){
          if(! options.condition.call(that, {}) ){
            err = true;
            errType.condition = true;
          }
        }
      }
      else {
        err = true;
        errType.nan = true;
      }
      //console.log(err);

      return { "valid": !err, "errType": errType };
    },
    "email": function (that, options) {
      // console.log(options);
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
      // console.log(settings);

      return valid.text(that, settings);
    },
    "password": function (that, options) {
      var value = $(that).val();
      var err = false;
      var errType = {};
      // //console.log($(that).val());

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

      if(value.length === 0){
        errType.empty = true;
      }
      var validSize = valid.text(that, { "size": settings.size });
      if(! validSize.valid){
        //console.log("size err");
        err = true;
        errType.size = {};
        if(validSize.errType.size.min){ errType.size.min = true; }
        else if(validSize.errType.size.max){ errType.size.max = true; }
      }

      if(settings.content){
        if(settings.content.small){
          if(! valid.text(that, { "regexp": { "pat": "[a-z]" } }).valid){
            //console.log("content.small err");
            err = true;
            if(! errType.content){ errType.content = {}; }
            errType.content.small = true;
          }        
        }
        if(settings.content.big){
          if(! valid.text(that, { "regexp": { "pat": "[A-Z]" } }).valid){
            //console.log("content.big err");
            err = true;
            if(! errType.content){ errType.content = {}; }
            errType.content.big = true;
          }         
        }
        if(settings.content.digit){
          if(! valid.text(that, { "regexp": { "pat": "\\d" } }).valid){
            //console.log("content.digit err");
            err = true;
            if(! errType.content){ errType.content = {}; }
            errType.content.digit = true;
          }         
        }
        if(settings.content.special){
          if(! valid.text(that, { "regexp": { "pat": "[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\=]" } }).valid){
            //console.log("content.special err");
            err = true;
            if(! errType.content){ errType.content = {}; }
            errType.content.special = true;
          }        
        }
        if(options.condition){
          if(! options.condition.call(that, {}) ){
            err = true;
            errType.condition = true;
          }
        }

      }
      //console.log(err);
      
      return { "valid": !err, "errType": errType };
    },
    "date": function (that, options) {
      var value = new Date($(that).val());
      var err = false;
      var errType = {};

      if($(that).val().length === 0){
        err = true;
        errType.empty = true;
      }

      if(value.getTime() !== NaN){

        if(options.range){
          if(options.range.from){
            if( value < options.range.from ){
              err = true;
              if(! errType.range){ errType.range = {} }
              errType.range.from = true;
            }
          }
          if(options.range.to){
            if( value > options.range.to ){
              err = true;
              if(! errType.range){ errType.range = {} }
              errType.range.to = true;
            }
          }          
        }
        if(options.condition){
          if(! options.condition.call(that, {}) ){
            err = true;
            errType.condition = true;
          }
        }
      }
      else {
        err = true;
        errType.nad = true;
      }
      //console.log(err);
      
      return { "valid": !err, "errType": errType };
    },
    "fields": function (that) {
      var err = false;
      //console.log(that);

      $(that.field).each(function () { 
        var isValid = valid[ that.type ](this, that.options);

        if(!isValid.valid){
          that.callback.call(this, isValid.errType);
          err = true;
        }
        else {
          that.callback.call(this);
        }

      });

      return !err;
    }
  }

  var methods = {
    'init': function ( options ) {
      console.log("Usage: $(selector).valid(type, options)");
      console.log("Go to http://github.com/mmotel/jquery-plugin-validation/ for more details.");

      return this;
    },
    'field': function ( method, options, callback, trigger ) {
      //console.log(options);

      return this.each(function () {
        var doValid = function () { 
          var isValid = valid[ method ](this, options);

          if(isValid.valid){
            callback.call(this);
          } 
          else {
            callback.call(this, isValid.errType);
          }
       }

       if(trigger && trigger.bind){
        $(this).bind(trigger.bind, function () {
          doValid.call(this);
        });
       }

       doValid.call(this);

      });
    },
    'form': function ( options, callback, trigger ) {
      //console.log(options);

      var doValid = function () {
        var err = false;

        options.fields.forEach(function( that, id ) {
          var isValid = valid.fields(that);

          if(! isValid){
            err = true;
          } 
        });

        if(err){
          callback.call(this, { "form": true });
        } else {
          callback.call(this);
        }
      }


      var selector = "";
      for(var i = 0; i < options.fields.length; i++){
        selector += options.fields[i].field + ", ";
      }
      selector = selector.substring(0, selector.length-2);
      // console.log(selector);

      if(trigger && trigger.bind){
        $(selector).bind(trigger.bind, function () {
          doValid.call(this);
        });
      }

      doValid.call(this);

      return $(selector);
    }
  };
  
  $.fn.valid = function ( method ) {
    if( valid[ method ] && method !== "fields" ) {
      return methods.field.apply( this, arguments );
    }
    else if( methods[ method ] && method !== "field" ){
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
