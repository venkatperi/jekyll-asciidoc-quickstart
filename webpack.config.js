const { inspect } = require( 'util' );
const config = require( 'webpkr' )( { projectDir: __dirname } )() ;

// console.log(inspect(config, {depth: 6}))

module.exports = config;
