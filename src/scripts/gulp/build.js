/* globals require, module */

var gulp = require('gulp');

module.exports = function() {
	return gulp.src('../../main/es6/**/*.js')

		.pipe() // start source maps

		.pipe() // transpile

		.pipe() // minify

		.pipe() // write sourcemaps

		.pipe(gulp.dest('../../../target/classes'));

};
