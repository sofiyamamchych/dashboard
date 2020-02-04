var gulp = require('gulp');
var sass = require('gulp-sass');
const { parallel } = require('gulp');


function convertSass() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('dist'))
}
function copyHtml() {
  return gulp.src('src/index.html') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(gulp.dest('dist'))
}

exports.build = parallel(convertSass, copyHtml);
