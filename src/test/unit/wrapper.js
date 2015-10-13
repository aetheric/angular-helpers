/* globals before, after, describe, require, it */

var chai = require('chai');
var req = require('request-promise');

var expect = chai.expect;

before(function() {

});

after(function() {

});

describe("The server", function(done) {

	it("should be started", function() {

		return req({
			uri: 'http://localhost:8000/',
			method: 'GET'

		}).then(function(response) {

			expect(response).to.not.be(null);
			done();

		});

	});

});
