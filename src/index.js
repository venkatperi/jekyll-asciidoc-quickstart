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
