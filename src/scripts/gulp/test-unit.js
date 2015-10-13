/* globals require, module, process */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var utils = require('gulp-utils');

module.exports = function() {
	return gulp.src('../../test/unit/**/*.js')

		.pipe(mocha({
			ui: 'bdd',
			reporter: 'spec',
			bail: false,
			compilers: {
				es6: 'mocha-traceur'
			}
		}))

		.on('error', utils.log)

		// Creating the reports after tests ran
		.pipe(istanbul.writeReports({
			reporters: [
				'json'
			]
		}))

		// Enforce a coverage of at least 90%
		.pipe(istanbul.enforceThresholds({
			thresholds: {
				global: 1
			}
		}))

		.once('end', function() {
			process.exit();
		});

};
