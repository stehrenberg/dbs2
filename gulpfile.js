/**
 * Created by Steff on 16/10/16.
 */
var gulp = require('gulp');
var assetsPath = './public/assets/';

gulp.task('copy-vendor-css', function () {
    var bootstrapPath = './node_modules/bootstrap/dist/css/';
    return gulp.src([
        bootstrapPath + 'bootstrap.css',
        bootstrapPath + 'bootstrap-theme.css',
    ])
        .pipe(gulp.dest(assetsPath + 'css/vendor'));
});

gulp.task('copy-vendor-js', function () {
    return gulp.src([
        './node_modules/handlebars/dist/handlebars.js'
    ])
        .pipe(gulp.dest(assetsPath + 'js/vendor'));
});

// default task wird ausgefuehrt, wenn man gulp ohne parameter startet.
// im array werden die subtasks definiert, die der default-task ausfuehren soll
gulp.task('default', ['copy-vendor-css', 'copy-vendor-js']);