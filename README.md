/**
 * To start the app and watch for file changes
 */

    gulp

/**
 * Gulp will also:
 *  - compile sass to css,
 *  - sourcemap, minify, autoprefix and merge css files,
 *  - transpile ES6 js code to ES5,
 *  - merge and minify js files,
 *  - refresh your browser when detecting any changes.
 * All of these can be found under ./gulpfile.js
 */



/**
 * Installed packages and what are they used for
 */

    npm install --save-dev gulp

    npm install gulp-load-plugins
      // automatically load plugins if there are several 

// Plugins for Css

    npm install gulp-sass --save-dev 

    npm install gulp-sourcemaps --save-dev
      // To see severeal different files and not just a 
      // big one, when looking with Chrome's Inspect 
      // Source Code

    npm install gulp-cssmin --save-dev
      // Minimize css to /dist directory

    npm install gulp-autoprefixer --save-dev
      // Auto-add vendor prefixes
      // Like --mozilla-bla-bla in css


// Plugins for JS

    npm install gulp-uglify --save-dev
      // minify js files

    npm install gulp-concat --save-dev
      // concat js files into one big file

    npm install gulp-babel --save-dev babel-preset-es2015
      // transpile ES6 to ES5, so it is readable by all browsers

// Plugin for reloading browser

    npm install browser-sync --save-dev