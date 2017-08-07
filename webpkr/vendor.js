const webpack = require( 'webpack' )

entry( { vendor: ['jquery', 'foundation', 'highlightjs'] } )

resolve( () => {
  alias( { jquery: 'jquery/src/jquery' } )
  alias( { foundation: 'foundation-sites/js/entries/foundation' } )
} )

plugin( webpack.ProvidePlugin, {
  $: 'jquery',
  jQuery: 'jquery'
} )

plugin( webpack.optimize.CommonsChunkPlugin, {
  name: 'vendor',
  minChunks: Infinity
} )

