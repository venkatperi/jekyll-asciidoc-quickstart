console.log( 'main' )
var $ = require( 'jquery' )
var foundation = require( '../js/foundation/foundation' )
require( 'font-awesome/css/font-awesome.css' );
require( '../css/foundation.css' );
require( '../css/themes/github.css' );
require( '../css/style.css' );

require( './highlight' )
require( './toc' )

$( document ).ready( function () {
  // foundation.Foundation.addToJquery( $ );
  // $( document ).foundation();
  $( '#toc' ).toc({showSpeed: 0});
} );
