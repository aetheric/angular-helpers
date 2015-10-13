/* globals require, module */

var gulp = require('gulp');
var jsdoc = require('gulp-docy');

module.exports = function() {
	return gulp.src('../../main/es6/**/*.js')

		.pipe(jsdoc.parser())

		.pipe(jsdoc.generator('../../../target/site'));

};
