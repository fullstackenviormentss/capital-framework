const sinon = require( 'sinon' );
const chai = require( 'chai' );
const expect = chai.expect;
const sinonChai = require( 'sinon-chai' );
const childProcess = require( 'child-process-promise' );
const path = require( 'path' );
const rootPath = require( '../root-path' );
const libPath = path.join( rootPath, 'scripts', 'npm', 'prepublish', 'lib' );
const util = require( libPath );
let execStub;

chai.use( sinonChai );

describe( 'publish', () => {
  beforeEach( () => {
    execStub = sinon.stub( childProcess, 'exec' );
  } );

  afterEach( () => {
    execStub.restore();
  } );

  it( 'publish the passed component to NPM', () => {
    util.publish( 'cf-core' );

    expect( execStub ).to.be.calledWith(
      'npm publish',
      { cwd: './tmp/cf-core' }
    );
  } );
} );
