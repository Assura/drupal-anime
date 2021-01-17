var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('plumber');
var cache = require('gulp-cached');
var themePath = '../../web/themes/lefetz_anime';

gulp.task('css', function () {
  gulp
    .src(themePath + '/assets/less/**/*.less')
    .pipe(cache('css_cache'))
    .pipe(less())
    .pipe(gulp.dest(themePath + '/assets/css/'));
});

gulp.task('default', gulp.series('css'));