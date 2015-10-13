/* globals require, __dirname */

var gulp = require('gulp');
var mocha = require('gulp-mocha');

// Make paths easier to reference.
__appdir = __dirname;

var task_build = require(__appdir + '/src/scripts/gulp/build.js');
var task_test_prep = require(__appdir + '/src/scripts/gulp/test-prep.js');
var task_test_unit = require(__appdir + '/src/scripts/gulp/test-unit.js');
var task_test_e2e = require(__appdir + '/src/scripts/gulp/test-e2e.js');
var task_docs = require(__appdir + '/src/scripts/gulp/docs.js');

gulp.task('build', [], task_build);

gulp.task('test-prep', [], task_test_prep);

gulp.task('test-unit', [ 'test-prep' ], task_test_unit);

gulp.task('test-e2e', [ 'test-prep' ], task_test_e2e);

gulp.task('test', [ 'test-unit', 'test-e2e' ]);

gulp.task('docs', [], task_docs);

gulp.task('default', [ 'build', 'test', 'docs' ]);
