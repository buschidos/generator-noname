var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;
var destPath = production ? 'dist' : '_tmp';

module.exports = {
    // environment (by default development)
    production: production,

    // paths
    src: {
        root: 'app',
        templates: 'app/templates',
        templatesData: 'app/templates/data',
        sass: 'app/sass',
        // path for sass files that will be generated automatically via some of tasks
        sassGen: 'app/sass/generated',
        js: 'app/js',
        img: 'app/img',
        svg: 'app/img/svg',
        icons: 'app/icons',
        // path to png sources for sprite:png task
        iconsPng: 'app/icons',
        // path to svg sources for sprite:svg task
        iconsSvg: 'app/icons',
        // path to svg sources for iconfont task
        iconsFont: 'app/icons',
        fonts: 'app/fonts',
        lib: 'app/lib'
    },
    dest: {
        root: destPath,
        html: destPath,
        css: destPath + '/css',
        js: destPath + '/js',
        img: destPath + '/img',
        fonts: destPath + '/fonts',
        lib: destPath + '/lib'
    },

    // misc
    errorHandler: require('./util/handle-errors')
};
