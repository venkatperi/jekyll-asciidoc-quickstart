require( 'font-awesome/css/font-awesome.css' );
require( '../css/foundation.css' );
require( '../css/themes/github.css' );

require( './highlight' )
require( './toc' )

$( document ).ready( function () {
  $( '#toc' ).toc( {
    title: "<h4>Contents</h4>",
    showSpeed: 0,
    listType: 'ul',
    headers: 'h2'
  } );
} );
