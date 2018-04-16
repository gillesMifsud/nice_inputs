// Require GULP
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Live reload
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Gulp watch syntax with live reload as an argument
gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
});

// Live reload watches where the index.html is
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});