/* globals require, module, __appdir */

var gulp = require('gulp');
var jsdoc = require('gulp-docy');
var traceur = require('gulp-traceur');

module.exports = function() {
	return gulp.src(__appdir + '/src/main/es6/**/*.js')

		.pipe(traceur())

		.pipe(jsdoc.parser())

		.pipe(jsdoc.generator(__appdir + '/target/site'));

};
