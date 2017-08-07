context( projectDir )

entry( { main: './src/index.js' } )

output( () => {
  path$( buildDir )
  filename( '[name].js' )
} )

require( './vendor' )
require( './js' )
require( './css' )
require( './scss' )
require( './images' )
require( './fonts' )
require( './node' )
require( './modernizr' )
