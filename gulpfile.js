const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    livereload: true,
    port: 8000
  });
});

gulp.task('html', () => {
  gulp.src('./**/*.html').pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./**/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
