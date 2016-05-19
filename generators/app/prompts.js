'use strict';

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Input project name',
    default: 'app'
  },
  {
    type: 'list',
    name: 'templates',
    message: 'Choose your preferred template engine',
    choices: [
      {
        name: 'Nunjucks',
        value: 'nunjucks'
      },
      {
        name: 'Swig',
        value: 'swig'
      },
      {
        name: 'Pug (Jade)',
        value: 'jade'
      },
      {
        name: 'I will write my own task for handling HTML',
        value: null
      }
    ],
    default: 0
  },
  {
    type: 'list',
    name: 'bundler',
    message: 'What we do with JS code?',
    choices: [
      {
        name: 'Let Webpack does magic to me',
        value: 'webpack'
      },
      {
        name: 'I will handle it manually (with gulp-include)',
        value: 'include'
      },
      // {
      //   name: 'Browserify',
      //   value: 'browserify'
      // },
      {
        name: 'I will write my own task for handling JS',
        value: null
      }
    ]
  },
  {
    type: 'checkbox',
    name: 'sprites',
    message: 'Which from icon system would be used',
    choices: [
      {
        name: 'SVG sprites',
        value: 'svg',
        checked: true
      },
      {
        name: 'Iconfonts',
        value: 'iconfont',
        checked: false
      },
      {
        name: 'PNG sprites',
        value: 'png',
        checked: false
      }
    ]
  },
  {
    type: 'confirm',
    name: 'svgo',
    message: 'Use SVGO for svg optimization?',
    default: true
  },
  {
    type: 'confirm',
    name: 'install',
    message: 'Install dependencies right now?',
    default: false
  }
];
