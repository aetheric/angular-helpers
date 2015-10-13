/* globals require, __appdir */

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var istanbul_traceur = require('istanbul-traceur');

module.exports = function() {
	return gulp.src(__appdir + '/src/main/es6/**/*.js')

		// Covering files
		.pipe(istanbul({
			includeUntested: true,
			instrumenter: istanbul_traceur.Instrumenter
		}))

		// Force `require` to return covered files
		.pipe(istanbul.hookRequire());

};
