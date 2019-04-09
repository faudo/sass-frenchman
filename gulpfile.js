'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('workflow', function () {
  gulp.src('./sass/frenchman-brand-base.scss')
    .pipe(sass().on('error', sass.logError))

  .pipe(gulp.dest('./wp-content/themes/frenchman-child/css/'))
});


gulp.task('default', function () {
	gulp.watch('./sass/**/*.scss', ['workflow']);
});
