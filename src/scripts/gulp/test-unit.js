/* globals require, module */

var gulp = require('gulp');
var mocha = require('gulp-mocha');

module.exports = function() {
	return gulp.src('../../test/unit/**/*.js')

		.pipe(mocha())

		.pipe(); // reports

};
