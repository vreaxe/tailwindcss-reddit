var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['css', 'html'], function() {
    browserSync.init({
        server: "./build"
    });

    gulp.watch("src/styles.css", ['css']);
    gulp.watch("src/index.html", ['html']).on('change', browserSync.reload);
});

gulp.task('css', function () {
  var postcss = require('gulp-postcss');
  var tailwindcss = require('tailwindcss');

  return gulp.src('src/styles.css')
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('build/'));
});

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['serve']);
