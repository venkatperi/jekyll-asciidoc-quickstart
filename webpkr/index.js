context( projectDir )

entry( { main: './src/index.js' } )

output( () => {
  path$( buildDir )
  filename( '[name].js' )
} )

require( './devtool' )
require( './vendor' )
require( './asciidoctor' )
require( './font-awesome' )
require( './js' )
require( './css' )
require( './images' )
require( './fonts' )
require( './node' )
require( './production' )
require( './modernizr' )
// require( './bundle_analyzer' )

entry( { main: './scss/style.scss' } )
