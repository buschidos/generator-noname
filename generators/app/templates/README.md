#README

Clone this repo and then in command line type:

* `npm install` - install all needed dependencies
* `gulp` - run dev-server and start watching source files or
* `gulp build` - build project
			
--

## List of Gulp tasks

To run separate task in command line type `gulp [task_name]`. 
Almost all tasks also have watch mode `gulp [task_name]:watch` but you don't nedd to use it directly.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks that needed to work with project in dev mode: initial build, watch files, run server with livereload
`build:dev`        | build dev version of project (without code optimizations)
`build`            | build production ready project (with code optimizations) 

### Other tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`sass` 	         | compile .sass/.scss to .css. We also use [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer), so feel free to include other awesome postcss [plugins](https://github.com/postcss/postcss#plugins) when needed
`browserify`       | compile .js sources into bundle file
`webpack`          | compile .js sources into bundle file
`copy`             | copy common files from `./src` path to `./dist` path
`swig`             | compile [swig](http://paularmstrong.github.io/swig/)  templates
`nunjucks`         | compile Mozilla's awesome [nunjucks](https://mozilla.github.io/nunjucks/) templates
`jade`             | compile [jade](http://jade-lang.com/) templates
`imagemin`         | images optimization
`svgo`             | optimize svg files from `./src/img/svgo` folder with [svgo](https://github.com/svg/svgo)
`iconfont`         | compile iconfonts from svg sources
`sprite:svg`       | create svg symbol sprites ([css-tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/))
`sprite:png`       | create png sprites
`server`           | run dev-server powered by [BrowserSync](https://www.browsersync.io/)
`clean`            | remove `./dist` folder

 
 

<!--* `default` - will start all tasks that needed to work with project in dev mode
* `build:dev` - build dev version of project (without code optimizations)
* `build` - build production ready project (with code optimizations)
* `watch` - run all needed for dev task in watch mode
* `sass` - compile .sass/.scss to .css. We also use [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer), so feel free to include other awesome postcss [plugins](https://github.com/postcss/postcss#plugins) when needed
* `browserify` - compile .js sources into bundle file
* `webpack` - compile .js sources into bundle file
* `copy` - copy common files from `./src` path to `./dist` path
* `swig` - compile [swig](http://paularmstrong.github.io/swig/)  templates
* `nunjucks` - compile Mozilla's awesome [nunjucks](https://mozilla.github.io/nunjucks/)  templates
* `jade` - compile [jade](http://jade-lang.com/) templates
* `imagemin` - images optimization
* `svgo` - optimize svg files from `./src/img/svgo` folder with [svgo](https://github.com/svg/svgo)
* `iconfont` - compile iconfonts from svg sources
* `sprite:svg` - 
* `server` - run dev-server powered by [BrowserSync](https://www.browsersync.io/)
* `clean` - remove `./dist` folder-->

## Flags

We have several useful flags.

* `gulp --open` or `gulp server --open` - run dev server and open preview in current default browser
* `gulp --tunnel=[name]` or `gulp server --tunnel=[name]` - run dev server and allows you to easily share a web service on your local development machine (powered by [localtunnel.me](https://localtunnel.me/)). After this command your local site will be avaiable over `[name].localtunnel.me` link.
* `gulp [task_name] --prod` or `gulp [task_name] --production` - run task in production mode. Some tasks (for compiling css or js) have additional optimization for production mode (such as code minification), so with this flag you can force enable production mode. `gulp build` use this by default.

##Other
Use `npm run ghpages` to push only `./dist` folder to **gh-pages** branch on github.