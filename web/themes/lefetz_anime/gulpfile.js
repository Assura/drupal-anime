var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
    return gulp.src('./themes/custom/d6site/images/*') 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./themes/custom/d6site/images'));
});
gulp.task('less', function () {
  return gulp.src('./assets/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css'));
});
gulp.task('uglify', function() {
  gulp.src('./themes/custom/d6site/lib/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./themes/custom/d6site/js'))
});
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./assets/less/**/*.less', gulp.series('less'));
    gulp.watch('./lib/*.js', gulp.series('uglify'));
    gulp.watch(['/assets/css/style.css', './**/*.twig', './js/*.js'], function (files){
        livereload.changed(files)
    });
});