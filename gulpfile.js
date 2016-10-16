/**
 * Created by Steff on 16/10/16.
 */
var gulp = require('gulp');

gulp.task('copy-vendor-css', function () {
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.css',
    ])
        .pipe(gulp.dest('./assets/css/vendor'));
});

gulp.task('copy-vendor-js', function () {
    return gulp.src([
        './node_modules/handlebars/dist/handlebars.js'
    ])
        .pipe(gulp.dest('./assets/js/vendor'));
});

// default task wird ausgefuehrt, wenn man gulp ohne parameter startet.
// // im array werden die subtasks definiert, die der default-task ausfuehren soll
gulp.task('default', ['copy-vendor-css', 'copy-vendor-js']);


//'/node_modules/bootstrap/dist/css/bootstrap-theme.css',