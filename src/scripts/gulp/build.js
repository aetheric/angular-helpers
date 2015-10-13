/* globals require, module, __appdir */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

module.exports = function() {
	return gulp.src(__appdir + '/src/main/es6/**/*.js')

		.pipe(sourcemaps.init())

		.pipe(traceur())

		.pipe(concat('angular-helpers.js'))

		.pipe(uglify())

		.pipe(sourcemaps.write(__appdir + '/target/classes', {
			sourceRoot: __appdir + '/src/main/es6',
			sourceMappingURLPrefix: './'
		}))

		.pipe(gulp.dest(__appdir + '/target/classes'));

};
