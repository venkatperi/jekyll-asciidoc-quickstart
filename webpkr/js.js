const path = require( 'path' )

module$( () => {
  rule( () => {
    test( /\.js$/ )
    use( 'babel-loader' )
    exclude( /node_modules/ )
  } )
} )
