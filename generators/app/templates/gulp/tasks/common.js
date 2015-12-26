var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

gulp.task('default', [
    'watch',
    'server'
]);

gulp.task('build', ['clean'],  function(cb) {
    runSequence(<% if (sprites.indexOf('iconfont') !== -1) { %>
        'iconfont',<% } %><% if (sprites.indexOf('svg') !== -1) { %>
        'sprite:svg',<% } %><% if (sprites.indexOf('png') !== -1) { %>
        'sprite:png',<% } %><% if (imagemin) { %>
        'imagemin',<% } %>
        'sass',<% if (templates === 'swig') { %>
        'swig',<% } %><% if (templates === 'jade') { %>
        'jade',<% } %><% if (bundler === 'browserify') { %>
        'browserify', <% } %>
        'copy'
    );
    cb();
});

gulp.task('watch', [<% if (templates === 'swig') { %>
    'swig:watch',<% } %><% if (templates === 'jade') { %>
    'jade:watch',<% } %><% if (sprites.indexOf('iconfont') !== -1) { %>
    'iconfont:watch',<% } %><% if (sprites.indexOf('svg') !== -1) { %>
    'sprite:svg:watch',<% } %><% if (sprites.indexOf('png') !== -1) { %>
    'sprite:png:watch',<% } %><% if (imagemin) { %>
    'imagemin:watch',<% } %><% if (bundler === 'browserify') { %>
    'browserify:watch',<% } %>
    'sass:watch'
]);
