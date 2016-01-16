var gulp        = require('gulp');
var config      = require('../config');

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
