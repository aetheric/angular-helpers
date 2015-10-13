/* globals require */

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');

module.exports = function() {
	return gulp.src(['../../main/es6/**/*.js'])

		// Covering files
		.pipe(istanbul({
			includeUntested: true
		}))

		// Force `require` to return covered files
		.pipe(istanbul.hookRequire());

};
