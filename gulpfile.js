var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    size = require('gulp-size'),
    clean = require('gulp-clean');

gulp.task('clean', function () {

});


gulp.task('transform', function () {
  return gulp.src('./project/static/js/src/main.js')
    .pipe(browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./project/static/js'))
    .pipe(size());
});


gulp.task('default', function () {
  console.log("Hello, World!");
  gulp.start('transform');
});
