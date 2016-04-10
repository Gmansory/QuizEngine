'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

gulp.task('sass', function () {
	gulp.src('./assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'))
		.pipe(livereload());
});
 
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('./assets/scss/*.scss', ['sass']);
});

gulp.task('serve', function(done) {
	var port = 4000,
		express = require('express'),
		app = express();
	app.use(express.static(__dirname + '/'));
	app.listen(port, function () {
		 done();
	});
	console.log('http://localhost:' + port)
})

gulp.task('default', ['serve', 'sass', 'watch']);