module$( () => {
  rule( () => {
    test( /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/ )
    use( 'url-loader' )
  } )
} )
