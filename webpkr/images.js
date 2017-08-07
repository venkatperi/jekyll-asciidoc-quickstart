module$( () => {
  rule( () => {
    test( /\.(png|gif|jpe?g)$/ )
    use( ['url-loader?limit=2048', 'image-webpack-loader?bypassOnDebug'] )
  } )
} )
