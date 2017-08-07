
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )

plugin(
  new ExtractTextPlugin( {
    filename: "style.css",
    allChunks: true
  } )
)

module$( () => {
  rule( () => {
    test( /\.scss$/ )
    use( ExtractTextPlugin.extract( {
      fallback: 'style-loader',
      use: 'css-loader!sass-loader',
    } ) )
  } )
} )

