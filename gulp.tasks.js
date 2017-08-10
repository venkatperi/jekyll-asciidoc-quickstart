const gulp = require( 'gulp' );
const child = require( 'child_process' );
const gutil = require( 'gulp-util' );
const rimraf = require( 'rimraf' );


function type( obj ) {
  return Object.prototype.toString.call( obj ).slice( 8, -1 ).toLowerCase();
}

function spawnTask( name, deps, opts, fn ) {
  // no deps?
  if ( type( deps ) === 'object' ) {
    fn = opts;
    opts = deps;
    deps = null;
  }
  opts = opts || {};
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
    if ( fn ) {
      fn();
    }
  } );
}

const rmdirTask = ( name, opts = {} ) =>
  gulp.task( name, opts.deps, ( done ) => rimraf( opts.dir, done ) )

const glog = ( tag, msg ) => gutil.log( `${tag}: ${msg}` )

module.exports = {
  rmdirTask,
  spawnTask,
  glog
}
