const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    livereload: true,
  });
});

gulp.task('html', () => {
  gulp.src('./**/*.html').pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./**/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
