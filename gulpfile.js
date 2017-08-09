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

function spawnTask( name, opts = {} ) {
  opts.tag = opts.tag || name;

  return gulp.task( name, opts.deps, ( done ) => {
    const proc = child.spawn( opts.cmd, opts.args, opts.opts );

    const logger = ( buffer ) => {
      buffer.toString()
        .split( /\n/ )
        .forEach( ( message ) => gutil.log( `${opts.tag}: ${message}` ) );
    };

    proc.stdout.on( 'data', logger );
    proc.stderr.on( 'data', logger );
    proc.on( 'close', done );
  } );
}

gulp.task( 'jekyll:clean', ( done ) => {
  rimraf( buildDir.jekyll, done )
} )

gulp.task( 'webpack:clean', ( done ) => {
  rimraf( buildDir.webpack, done )
} )

spawnTask( 'webpack:build', {
  deps: ['webpack:clean'],
  cmd: './node_modules/.bin/webpack',
} )

spawnTask( 'jekyll:build', {
  deps: ['jekyll:clean', 'webpack:build'],
  cmd: 'jekyll',
  args: ['build'],
} )

spawnTask( 'jekyll:serve', {
  deps: ['jekyll:clean'],
  cmd: 'jekyll',
  args: ['serve', '--watch', '--incremental'],
} )

gulp.task( 'webpack:serve', () => {
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
  console.log( 'reloading' )
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

gulp.task( 'build', ['jekyll:build'] )
gulp.task( 'serve', ['webpack:serve', 'jekyll:serve', 'bs:serve'] )

