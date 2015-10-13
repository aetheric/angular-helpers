/* globals require, module */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

module.exports = function() {
	return gulp.src('../../main/es6/**/*.js')

		.pipe(sourcemaps.init())

		.pipe(traceur())

		.pipe(concat('angular-helpers.js'))

		.pipe(uglify())

		.pipe(sourcemaps.write('.', {
			sourceRoot: '../../../target/classes',
			sourceMappingURLPrefix: './'
		}))

		.pipe(gulp.dest('../../../target/classes'));

};
