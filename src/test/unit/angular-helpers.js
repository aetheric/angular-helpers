/* globals describe, it, require, beforeEach */

var chai = require('chai');
var mockrequire = require('mockrequire');

var expect = chai.expect;

describe('The library', function() {
	var angular_helpers;
	var angular;

	beforeEach(function() {

		// Mock the angular library functions.
		angular = {

		};

		angular_helpers = mockrequire('../../../target/classes/angular-helpers.js', {
			angular: angular
		});

	});

	it('should not export anything', function() {
		expect(angular_helpers).to.be.empty();
	});

	it('should add functions to angular.', function() {
		expect(angular.controller).to.not.be.undefined();
		expect(angular.service).to.not.be.undefined();
		expect(angular.directive).to.not.be.undefined();
	});

});


