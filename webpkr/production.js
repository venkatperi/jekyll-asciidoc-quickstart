const {
  UglifyJsPlugin,
  AggressiveMergingPlugin,
  MinChunkSizePlugin
} = require( 'webpack' ).optimize

production( () => {
  plugin( new UglifyJsPlugin( {
    mangle: true,
    compress: {
      warnings: false, // Suppress uglification warnings
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi] // skip pre-minified libs
  } ) )

  plugin( new AggressiveMergingPlugin() )
  plugin( new MinChunkSizePlugin( { minChunkSize: 2048, } ) )
} );
