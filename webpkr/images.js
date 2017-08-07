module$( () => {
  rule( () => {
    test( /\.(png|gif|jpeg|jpg|svg)$/ )
    use( ['url-loader?limit=2048'] )
  } )
} )
