/* globals require, module, process, __appdir */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var utils = require('gulp-util');
var istanbul = require('gulp-istanbul');

module.exports = function() {
	return gulp.src(__appdir + '/src/test/unit/**/*.js')

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
			dir: __appdir + '/target/reports/coverage',
			reporters: [
				'json'
			]
		}))

		// Enforce a coverage of at least 90%
		.pipe(istanbul.enforceThresholds({
			thresholds: {
				global: 0
			}
		}))

		.once('end', function() {
			process.exit();
		});

};
