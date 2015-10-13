/* globals describe, it, require */

let expect = require('chai').expect;
let mockrequire = require('mockrequire');

describe('The library should enhance angular.', function() {
	var angular_helpers;
	var angular;

	beforeEach(function() {

		// Mock the angular library functions.
		angular = {

		};

		angular_helpers = mockrequire('../main/angular-helpers', {
			underscore: require('underscore'),
			angular: angular
		});

	});

	it('should not export anything', function() {
		expect(angular_helpers).to.be.empty;
	});

	it('should add functions to it.', function() {
		expect(angular.controller).to.not.be.undefined;
		expect(angular.service).to.not.be.undefined;
		expect(angular.directive).to.not.be.undefined;
	});

});


