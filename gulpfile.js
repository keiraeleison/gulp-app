var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create();
	/*
	These are actually not needed if we use load-plugins
	*/
	// sass = require('gulp-sass'),
	// autoprefixer = require('gulp-autoprefixer'),
	// cssmin = require('gulp-cssmin'),
	// sourcemaps = require('gulp-sourcemaps');*/


// compile sass to css
gulp.task('css', function() {
	// compilre sass
	// output file to a dist/
	return gulp.src(['./src/sass/main.scss']) // --> when we have mltiple tasks, we want to RETURN
		//.pipe(sourcemaps.init()) --> without load-plugins
		.pipe(plugins.sourcemaps.init())

		// .pipe(sass().on('error', sass.logError))  --> without load-plugins
		.pipe(plugins.sass().on('error', plugins.sass.logError))

		// .pipe(cssmin())  --> without load-plugins
		.pipe(plugins.cssmin())

		// .pipe(autoprefixer())  --> without load-plugins
		.pipe(plugins.autoprefixer())

		// .pipe(sourcemaps.write())  --> without load-plugins
		.pipe(plugins.sourcemaps.write())

		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

// our javascript task
gulp.task('js', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./src/js/magic.js',
		'./src/js/admin.js'
	])
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat('all.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());


});

gulp.task('watch', function() {
	gulp.watch(['./src/sass/*.scss'], ['css']) // (['files to watch'], 'task to do')
	gulp.watch(['./src/js/*.js'], ['js'])
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});	
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js', 'watch', 'serve']);