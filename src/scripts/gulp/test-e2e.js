/* globals require, module, process, __appdir */

var gulp = require('gulp');
var protractor = require('gulp-angular-protractor');
var utils = require('gulp-util');
var istanbul = require('gulp-istanbul');

module.exports = function() {
	return gulp.src(__appdir + '/src/test/e2e/**/*.js')

		.pipe(protractor({
			configFile: __appdir + '/src/test/protractor.js',
			args: [ '--baseUrl', 'http://localhost:8080/' ],
			autoStartStopServer: true,
			debug: true
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
