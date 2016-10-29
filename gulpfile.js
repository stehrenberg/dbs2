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
        './node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css'
    ])
        .pipe(gulp.dest(assetsPath + 'css/vendor'));
});

gulp.task('copy-vendor-js', function () {

    var highchartsPath = './node_modules/highcharts/';
    var bootstrapMultSelectPath = './node_modules/bootstrap-multiselect/dist/js/';
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/handlebars/dist/handlebars.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        highchartsPath + 'highcharts.js',
        highchartsPath + 'modules/exporting.js',
        bootstrapMultSelectPath + 'bootstrap-multiselect.js',
        bootstrapMultSelectPath + 'bootstrap-multiselect-collapsible-groups.js'
    ])
        .pipe(gulp.dest(assetsPath + 'js/vendor'));
});

// default task wird ausgefuehrt, wenn man gulp ohne parameter startet.
// im array werden die subtasks definiert, die der default-task ausfuehren soll
gulp.task('default', ['copy-vendor-css', 'copy-vendor-js']);