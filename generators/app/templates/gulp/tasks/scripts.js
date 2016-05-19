var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var include    = require('gulp-include');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var gulpIf     = require('gulp-if');
var size       = require('gulp-size');
var server     = require('./server');
var config     = require('../config');

gulp.task('scripts', function() {
    return gulp
        .src(config.src.js + '/*.js')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: config.errorHandler
        }))
        .pipe(include())
        // .pipe(gulpIf(config.production, uglify({
        //     preserveComments: 'license'
        // })))
        .pipe(size({
            showFiles: true,
            showTotal: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.js))
        .on('end', server.reload);
});

gulp.task('scripts:watch', function() {
    gulp.watch(config.src.js + '/**/*.js', ['scripts']);
});
