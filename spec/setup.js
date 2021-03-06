var chai = require( "chai" );
chai.use( require( "sinon-chai" ) );
chai.use( require( "chai-as-promised" ) );
global.should = chai.should();
global.sinon = require( "sinon" );
global.bigInt = require( "big-integer" );
global.getHiloInstance = require( "../src" );

global.getExpected = function getExpected( cnt, startIdx ) {
	const expected = [];
	let idx = 0;
	if ( startIdx.equals( 0 ) ) {
		startIdx = startIdx.add( 1 );
	}
	while ( idx < cnt ) {
		expected.push( startIdx.toString() );
		startIdx = startIdx.add( 1 );
		idx++;
	}
	return expected;
};
