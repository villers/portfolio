var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
cache = require('gulp-cache'),
livereload = require('gulp-livereload'),
del = require('del');

var path = {
    bower :'./bower_components/',
    template : './template/',
    view : './app/view/**/*.html'
};

gulp.task('sass', function() {
    return gulp.src(path.bower+'materialize/sass/materialize.scss')
        .pipe(sass({ style: 'compressed' }).on( 'error', console.log ))
        .pipe(gulp.dest(path.bower+'materialize/css/'))
});

gulp.task('scripts', function() {
    return gulp.src([path.bower+'jquery/dist/jquery.js',
        path.bower+'eventie/eventie.js',
        path.bower+'eventEmitter/eventEmitter.js',
        path.bower+'materialize/js/*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.template+'js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(path.template+'js/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('default', function() {
    gulp.start('sass', 'scripts');
});

gulp.task('watch', function() {
    gulp.watch(path.bower+'materialize/sass/**/*.scss', ['sass']);
    gulp.watch(path.bower+'materialize/js/*.js', ['scripts']);
    gulp.watch([path.view]).on('change', livereload.changed);
    livereload.listen();

});
