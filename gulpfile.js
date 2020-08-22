'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync');

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass ())
        .pipe(gulp.dest('css'))
})

gulp.task('server',function () {
    server.init({
        server:'.',
        notify: false
    })
    gulp.watch('[scss/**/*.scss]', gulp.series('css')).on('change', server.reload);
})





 

