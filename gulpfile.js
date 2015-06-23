var gulp = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('clean', function () {
  return gulp.src(['./project/static/scripts/js'], {read: false})
    .pipe(require('gulp-clean')());
});


gulp.task('transform', function () {
  return gulp.src('./project/static/js/src/main.js')
    .pipe(browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./project/static/js/dist/'))
    .pipe(require('gulp-size')());
});


gulp.task('default', ['clean'], function () {
  console.log("Hello, World!");
  gulp.start('transform');
});
