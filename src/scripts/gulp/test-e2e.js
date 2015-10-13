/* globals require, module, process */

var gulp = require('gulp');
var protractor = require('gulp-angular-protractor');
var utils = require('gulp-util');
var istanbul = require('gulp-istanbul');

module.exports = function() {
	return gulp.src('../../test/e2e/**/*.js')

		.pipe(protractor({
			configFile: 'src/test/protractor.js',
			args: [ '--baseUrl', 'http://localhost:8080/' ],
			autoStartStopServer: true,
			debug: true
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
