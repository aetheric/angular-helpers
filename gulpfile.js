/* globals require */

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('build', require('./src/scripts/gulp/build.js'));

gulp.task('test-prep', require('./src/scripts/gulp/test-prep.js'));

gulp.task('test-unit', [ 'test-prep' ], require('./src/scripts/gulp/test-unit.js'));

gulp.task('test-e2e', [ 'test-prep' ], require('./src/scripts/gulp/test-e2e.js'));

gulp.task('test', [ 'test-unit', 'test-e2e' ]);

gulp.task('docs', require('./src/scripts/gulp/docs.js'));

gulp.task('default', [ 'build', 'test', 'docs' ]);
