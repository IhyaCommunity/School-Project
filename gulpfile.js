const gulp = require('gulp');
const less = require('gulp-less');
const webserver = require('gulp-webserver');
const sourceMaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

///////////////////////////////////////////////////
var lessDir = 'public/assets/source/less/';
var cssDir = 'public/assets/source/styles/';
var tsDir = 'public/assets/source/typescript/*.js';

//////////////////////////////////////////////////
var lessOut = 'public/assets/source/less/**/*.less';
var tsOut = 'public/assets/source/scripts/';

/////////////////////////////////////////////////////////
gulp.task('webserver', () => {
    gulp.src('public')
        .pipe(webserver({
            livereload: true,
            directorylisten: true,
            open: true
        }));
});

gulp.task('less', () => {
    return gulp.src(`${lessDir}main.less`)
        .pipe(sourceMaps.init('./'))
        .pipe(less())
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('/'))
        .pipe(gulp.dest(cssDir));
});

gulp.task('typescript', function () {
    return gulp.src(tsDir)
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('/'))
        .pipe(gulp.dest(tsOut));
});

gulp.task('watch', () => {
    gulp.watch([lessOut, tsDir], ['less', 'typescript']);
});

gulp.task('default', ['less', 'typescript', 'webserver', 'watch']);