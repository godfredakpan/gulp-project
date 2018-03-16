'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');


gulp.task('sass', () => {
	gulp.src('scss/custom.scss')
		.pipe(sass({ includePaths: ['scss']}))
		.pipe(gulp.dest('styles'))
		.pipe(browserSync.reload({
	      stream: true
	    }))
});

gulp.task('browser-sync', () => {
	browserSync.init([
		'styles/*.css',
		'scripts/*.js'
	], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('default', ['sass', 'browser-sync'], () => {
	gulp.watch('scss/*/*.scss', ['sass']);
})