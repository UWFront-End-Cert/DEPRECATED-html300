const {dest, series, src, watch} = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create()

function compileSass() {
    return src('css/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(
            autoprefix({
                browsers: ['> .5%'],
            })
        )
        .pipe(dest('css/'))
        .pipe(browserSync.stream());
}

function browserSyncs() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './',
        },
    })
    watch(['css/*.scss']).on('change', compileSass)
    watch(['*.html']).on('change', browserSync.reload)
}

exports.default = browserSyncs
