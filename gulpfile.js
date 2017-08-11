const gulp = require( 'gulp' );
const browserSync = require( 'browser-sync' ).create();
const path = require( 'path' );
const { delay, glog, rmdirTask, spawnTask } = require( './gulp.tasks' )

const task = gulp.task.bind( gulp )
const watch = gulp.watch.bind( gulp )

const cmds = {
  webpack: './node_modules/.bin/webpack',
  webpackDevServer: './node_modules/.bin/webpack-dev-server'
}

const buildDir = {
  jekyll: path.join( __dirname, '_site' ),
  webpack: path.join( __dirname, 'build' ),
}

const ports = {
  webpack: '8080',
  browserSync: '3000',
  jekyll: '4000'
}

rmdirTask( 'jekyll:clean', { dir: buildDir.jekyll } )

spawnTask( 'jekyll:build', ['jekyll:clean', 'webpack:build'], {
  cmd: 'jekyll',
  args: ['build'],
} )

spawnTask( 'jekyll:serve', ['jekyll:clean'], {
  cmd: 'jekyll',
  tag: 'jekyll',
  args: ['serve', '--watch', '--incremental', '-P', `${ports.jekyll}`],
} )

rmdirTask( 'webpack:clean', { dir: buildDir.webpack } )

spawnTask( 'webpack:build', ['webpack:clean'], {
  tag: 'webpack',
  cmd: cmds.webpack,
} )

spawnTask( 'webpack:serve', ['webpack:clean'], {
  cmd: cmds.webpackDevServer,
  tag: 'webpack',
} )

task( 'bs:reload', () => browserSync.reload() )

delay( 'bs:delay', 5000 )

task( 'bs:serve', ['bs:delay'], () => {
  glog( 'browserSync', `Starting server on http://localhost:${ports.browserSync}` );
  browserSync.init( { proxy: `http://localhost:${ports.jekyll}` } )
  watch( "_site/**/*", ['bs:reload'] )
  watch( "build/**/*", ['bs:reload'] )
  watch( ".ignore", ['bs:reload'] )
} );

task( 'build', ['jekyll:build'] )

task( 'serve', ['webpack:serve', 'jekyll:serve', 'bs:serve'] )

