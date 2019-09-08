const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('watch', () => {
  gulp.watch('sass/**/*.scss', (done) => {
      gulp.series(['clean', 'styles'])(done);
  });
});

gulp.task('icons', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('/assets/webfonts/'));
});

gulp.task('default', gulp.series(['clean', 'styles','icons']));
