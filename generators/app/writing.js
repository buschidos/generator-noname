'use strict';

var _      = require('lodash');
var path   = require('path');
var mkdirp = require('mkdirp');

module.exports = function () {
  var props    = this.props;
  var destPath = this.destinationPath();

  props._ = {
    kebabCase: _.kebabCase,
    camelCase: _.camelCase,
    capitalize: _.capitalize
  };

  // create directories
  mkdirp(path.join(destPath, 'app/fonts'));
  mkdirp(path.join(destPath, 'app/img'));

  // dotfiles
  this.copy('gitignore', '.gitignore');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gulpfile.js');
  this.template('package.json', props);

  // gulp configs
  this.copy('gulp/config.js');
  this.bulkDirectory('gulp/util', 'gulp/util');

  // common tasks
  this.template('gulp/tasks/common.js', props);
  this.copy('gulp/tasks/clean.js');
  this.copy('gulp/tasks/copy.js');
  this.copy('gulp/tasks/server.js');
  this.copy('gulp/tasks/sass.js');

  // compile templates tasks
  switch (props.templates) {
    case 'swig':
      this.copy('gulp/tasks/swig.js');
      break;
    case 'jade':
      this.copy('gulp/tasks/jade.js');
      break;
  }

  // image optimization task
  if (props.imagemin) {
    this.copy('gulp/tasks/imagemin.js');
  }

  // iconfont task
  if (props.sprites.indexOf('iconfont') !== -1) {
    this.bulkDirectory('gulp/tasks/iconfont', 'gulp/tasks/iconfont');
    mkdirp(path.join(destPath, 'app/img/icons/iconfont'));
  }

  // svg sprites task
  if (props.sprites.indexOf('svg') !== -1) {
    this.bulkDirectory('gulp/tasks/sprite-svg', 'gulp/tasks/sprite-svg');
    mkdirp(path.join(destPath, 'app/img/icons/svg'));
  }

  // png sprites task
  if (props.sprites.indexOf('png') !== -1) {
    this.bulkDirectory('gulp/tasks/sprite-png', 'gulp/tasks/sprite-png');
    mkdirp(path.join(destPath, 'app/img/icons/png'));
  }

  // js bundler task
  if (props.bundler === 'browserify') {
    this.copy('gulp/tasks/browserify.js');
  }

  // copy directories
  this.directory('app/js', 'app/js');
  this.sprites = props.sprites; // or in /templates/app/sass/app.sass use options.sprites
  this.directory('app/sass', 'app/sass');

  if (props.templates === 'swig') {
    this.directory('app/templates-swig', 'app/templates');
  }

  if (props.templates === 'jade') {
    this.directory('app/templates-jade', 'app/templates');
  }
};
