const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' )

context( projectDir )

entry( { main: ['./src/index.js', './scss/style.scss'] } )

output( () => {
  path$( buildDir )
  filename( '[name].js' )
} )

development( () => {
  devtool( 'cheap-module-source-map' )
} )

// plugin( new BundleAnalyzerPlugin() )

require( './vendor' )
require( './js' )
require( './css' )
require( './images' )
require( './fonts' )
require( './node' )
require( './production' )
require( './modernizr' )
