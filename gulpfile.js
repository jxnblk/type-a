
var gulp = require('gulp');
var basswork = require('gulp-basswork');

gulp.task('default', ['basswork'], function(){
  gulp.watch(['./src/**/*'], ['basswork']);
});

gulp.task('basswork', function() {
  gulp.src('./src/base.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'));
});

