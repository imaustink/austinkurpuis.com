// Assigning modules to local variables
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var AWS = require('aws-sdk');
var awspublish = require('gulp-awspublish');

// Default task
gulp.task('default', ['dev']);

gulp.task('build', ['sass', 'js', 'pug']);

gulp.task('sass', function() {
    return gulp.src(['vendor/bootstrap/scss/bootstrap.scss', 'scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Minify JS
gulp.task('js', function() {
    return gulp.src([
            'vendor/particles.js',
            'js/ga.js',
            'js/scripts.js'
        ])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'public'
        },
    });
});

gulp.task('pug', function(){
    return gulp.src('pug/**/*.pug')
        .pipe(pug({
            basedir: './'
        }))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Watch Task that compiles SCSS and watches for HTML or JS changes and reloads with browserSync
gulp.task('dev', ['build', 'browserSync', 'sass', 'js'], function() {
    gulp.watch(['scss/*.scss'], ['sass']);
    // Reloads the browser whenever HTML or JS files change
    // These call pug not reload because js and css are inlined
    gulp.watch('public/css/*.css', ['pug']);
    gulp.watch('public/js/*.js', ['js', 'pug']);

    gulp.watch('public/**/*.html', browserSync.reload);
    gulp.watch('public/js/**/*.js', browserSync.reload);
    //gulp.watch('*.html', browserSync);
    gulp.watch(['pug/**/*.pug', 'pug/template/*.pug'], ['pug']); 
});

gulp.task('publish', ['build'], function(){
    var publisher = awspublish.create({
        region: 'us-east-1',
        params: {
            Bucket: 'www.austinkurpuis.com'
        },
        credentials: new AWS.SharedIniFileCredentials({profile: 'personal'})
    });

    var headers = {
        'Cache-Control': 'max-age=315360000, no-transform, public' 
    };

    return gulp.src(['public'])
        // publisher will add Content-Length, Content-Type and headers specified above 
        // If not specified it will set x-amz-acl to public-read by default 
        .pipe(publisher.publish(headers))
     
        // create a cache file to speed up consecutive uploads 
        .pipe(publisher.cache())
     
        // print upload updates to console 
        .pipe(awspublish.reporter());
});