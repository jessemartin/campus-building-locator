(function () {
  'use strict';
  var requirejs = require('requirejs'),
    gulp = require('gulp'),
    child_process = require('child_process'),
    changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    server = require('./server/app.js'),
    LESS_DIR = 'app/css',
    JS_DIR = 'app/js',
    CSS_DIST = 'dist/css',
    JS_DIST = 'dist/js';

  gulp.task('clean', function (cb) {
    del('dist', cb);
  });

  gulp.task('images', ['clean'], function () {
    return gulp.src('app/img/*')
        .pipe(imagemin({ optimizationLevel: 0 }))
        .pipe(gulp.dest('dist/img'));
  });

  gulp.task('pages', ['clean'], function () {
    return gulp.src('app/pages/**/*.html')
        .pipe(gulp.dest('dist'));
  });

  gulp.task('vendor', ['clean'], function () {
    return gulp.src([
          'vendor/jquery/dist/jquery.js',
          'vendor/underscore/underscore.js',
          'vendor/angular/angular.js',
          'vendor/angular-route/angular-route.js',
          'vendor/bootstrap/dist/js/bootstrap.js',
          'vendor/bootstrap/dist/css/bootstrap.css',
          'vendor/bootstrap/dist/fonts/*'
        ])
        .pipe(gulp.dest('dist/vendor'));
  });

  gulp.task('css', ['clean'], function () {
    return gulp.src(LESS_DIR + '/main.less')
        .pipe(changed(CSS_DIST))
        .pipe(less())
        .pipe(gulp.dest(CSS_DIST));
  });

  gulp.task('js', ['clean'], function () {
    return gulp.src('app/js/**/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest(JS_DIST));
  });

  gulp.task('build', ['clean', 'css', 'js', 'vendor', 'images', 'pages']);

  gulp.task('watch', function () {
    server = require('./server/app.js');
    server();
    gulp.watch('app/**/*', ['build']);
  });

  gulp.task('server', server);

  gulp.task('default', ['build', 'watch']);
}());
