context( projectDir )

entry( { main: './src/index.js' } )

output( () => {
  path$( buildDir )
  filename( '[name].js' )
} )

require( './vendor' )
require( './js' )
require( './css' )
require( './images' )
require( './node' )
require( './modernizr' )
