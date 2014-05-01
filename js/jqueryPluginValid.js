(function( $ ){

  var methods = {
    init: function ( options ) {
      //init logic
      var settings = $.extend( { text: 'Podaj wartość' }, options );
    },
    show: function () {
      //show logic

    },
    hide: function () {
      //hide logic

    },
    update: function ( content ) {
      //upadte logic
      console.log( "" + content );
    }
  };
  
  $.fn.myPlugin = function ( method ) {
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