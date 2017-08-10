const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )
var OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );


plugin(
  new ExtractTextPlugin( {
    filename: "style.css",
    allChunks: true
  } )
)

production( () => {
  plugin(
    new OptimizeCssAssetsPlugin( {
      assetNameRegExp: /\.css$/g,
      cssProcessor: require( 'cssnano' ),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    } ) )
} )

module$( () => {

  rule( () => {
    test( /\.css$/ )
    use( ExtractTextPlugin.extract( {
      fallback: 'style-loader',
      use: 'css-loader',
    } ) )
  } )

  rule( () => {
    test( /\.scss$/ )
    use( ExtractTextPlugin.extract( {
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ]
    } ) )
  } )
} )
