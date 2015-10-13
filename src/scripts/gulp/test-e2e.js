/* globals require, module */

var gulp = require('gulp');
var mocha = require('gulp-mocha');

module.exports = function() {
	return gulp.src('../../test/e2e/**/*.js')

		.pipe(mocha())

		.pipe(); // reports

};
