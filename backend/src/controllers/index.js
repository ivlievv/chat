const fs = require( 'fs' );
const path = require( 'path' );
const basename = path.basename( __filename );

const seaHorseController = {};

fs
  .readdirSync( __dirname )
  .filter( file => {
    return (file.indexOf( '.' ) !== 0) && (file !== basename) && (file.slice( -3 ) === '.js');
  } )
  .forEach( file => {
    const controller = require( path.join( __dirname, file ) );
    seaHorseController[controller.constructor.name] = controller;
  } );

module.exports = seaHorseController;
