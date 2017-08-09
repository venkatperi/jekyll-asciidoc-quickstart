context( projectDir )

entry( { main: ['./src/index.js', './scss/style.scss'] } )

output( () => {
  path$( buildDir )
  filename( '[name].js' )
} )

development( () => {
  devtool( 'cheap-module-source-map' )
} )

require( './vendor' )
require( './js' )
require( './css' )
require( './images' )
require( './fonts' )
require( './node' )
require( './modernizr' )
