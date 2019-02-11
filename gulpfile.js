let gulp = require('gulp');
let sass = require('gulp-sass');
let sass_folder = 'src/scss/**/*.scss';
let css_folder = ('dist/css');

// convert sass to css
gulp.task('sass', function() {
  return gulp.src(sass_folder)
    .pipe(sass())
    .pipe(gulp.dest(css_folder))
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});


// watch functions
gulp.task('watch', function() {
  gulp.watch(sass_folder, gulp.series('sass'));
  gulp.watch('src/**/*.html', gulp.series('html'))
});