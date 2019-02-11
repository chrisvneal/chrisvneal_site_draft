let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(('src/scss/**/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});