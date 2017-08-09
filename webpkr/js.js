module$( () => {
  rule( () => {
    test( /\.js$/ )
    use( 'babel-loader' )
    exclude( /node_modules/ )
    include( './src' )
  } )
} )
