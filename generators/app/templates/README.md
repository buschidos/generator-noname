## This project use Gulp

Clone this repo and then in command line type:

* `npm install` - install all needed dependencies
* `gulp build` - initial build (compile all sources for first time)
* `gulp` - run dev-server and start watching source files

### Project structure

	./_tmp/
		# dev folder with compiled project files
	./app/
		js/
			app.js
		sass/
			helpers/
			app.sass
		templates/
			data/
			
	./dist/
		# projects production version
			

## Gulp Tasks

* `gulp default` or simply `gulp` - will start all tasks that needed to work with project in dev mode
* `gulp sass` - compile .sass to .css
* `gulp browserify` - compile .js sources into bundle file
* `gulp copy` - copy common files from app path to dist path
* `gulp swig` - compile [swig](http://paularmstrong.github.io/swig/)  templates
* `gulp jade` - compile [jade](http://jade-lang.com/) templates
* `gulp imagemin` - images optimization
* `gulp server` - run dev-server powered by [BrowserSync](https://www.browsersync.io/)
* `gulp clean` - remove folder with compiled files

## DEV and PRODUCTION mode

To switch between modes use flags `--prod` or `--production`. By default mode set as *development*.

*Usage*: `gulp build --prod` or `gulp build --production`.

You can use this flags with any other task, not only with `gulp build`.
For example, `gulp server --prod` will start serving files from `./dist` folder instead of `./_tmp`.

**Main difference** between modes is what folder we will use as destination for compiled files. For **DEV** we use `./_tmp` folder, for **PRODUCTION** - `./dist`.

Keep in mind, that `./_tmp` folder set as **ignored** in `.gitignore`.

Also in **PRODUCTION** mode JS will be minified with UglifyJS, and SASS will be compiled in _compact_ style, instead of _expanded_.