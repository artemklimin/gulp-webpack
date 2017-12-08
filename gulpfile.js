var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notyfy: false
    });
});

gulp.task('bundle', function() {
    gulp.src('./app/js/index.js') // entry point
        .pipe(browserify())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
});

//gulp.task('mytask', function() {
//    return gulp.src()
//    .pipe(plugin())
//    .pipe(gulp.dest(''))
//});