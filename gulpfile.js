const gulp = require( 'gulp' );
const child = require( 'child_process' );
const gutil = require( 'gulp-util' );
const Webpack = require( 'webpack' );
const WebpackDevServer = require( 'webpack-dev-server' );
var browserSync = require( 'browser-sync' ).create();
const rimraf = require( 'rimraf' );
const path = require( 'path' );

const webpackConfig = () => require( './webpack.config' )

const buildDir = {
  jekyll: path.join( __dirname, '_site' ),
  webpack: path.join( __dirname, 'build' ),
}

gulp.task( 'jekyll:clean', ( done ) => {
  rimraf( buildDir.jekyll, done )
} )

gulp.task( 'webpack:clean', ( done ) => {
  rimraf( buildDir.webpack, done )
} )

gulp.task( 'jekyll:serve', ['jekyll:clean'], () => {
  const jekyll = child.spawn( 'jekyll', [
    'serve',
    '--watch',
    '--incremental',
  ] );

  const jekyllLogger = ( buffer ) => {
    buffer.toString()
      .split( /\n/ )
      .forEach( ( message ) => gutil.log( 'Jekyll: ' + message ) );
  };

  jekyll.stdout.on( 'data', jekyllLogger );
  jekyll.stderr.on( 'data', jekyllLogger );

} );

gulp.task( 'webpack:build', ['webpack:clean'], ( done ) => {
  Webpack( webpackConfig(), ( err, stats ) => {
    if ( err ) return done( err );
    gutil.log( 'Webpack: ' + stats.toString( {
      colors: true
    } ) )
  } )
} )

gulp.task( 'webpack:serve',  () => {
  const compiler = Webpack( webpackConfig() )
  const server = new WebpackDevServer( compiler, {
    stats: {
      colors: true
    }
  } );

  server.listen( 8080, "127.0.0.1", function () {
    console.log( "Starting server on http://localhost:8080" );
  } );

} )

gulp.task( 'bs:reload', function ( done ) {
  console.log('reloading')
  browserSync.reload();
  done();
} )

gulp.task( 'bs:serve', function () {
  browserSync.init( {
    proxy: "http://localhost:4000"
  } );
  gulp.watch( "_site/**/*", ['bs:reload'] );
  gulp.watch( "build/**/*", ['bs:reload'] );
} );

gulp.task( 'build', ['webpack:compile'] )
gulp.task( 'serve', ['webpack:serve', 'jekyll:serve', 'bs:serve'] )

