const gulp = require('gulp');
const less = require('gulp-less');
const sourceMaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();

///////////////////////////////////////////////////
var lessDir = 'public/assets/source/less/';
var cssDir = 'public/assets/source/styles/';
var tsDir = 'public/assets/source/typescript/*.ts';

//////////////////////////////////////////////////
var lessOut = 'public/assets/source/less/**/*.less';
var tsOut = 'public/assets/source/scripts/';

/////////////////////////////////////////////////////////

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

gulp.task('live-reload', ['less','typescript'], () => {
    browserSync.init({
        server: "./public"
    });
    
    gulp.watch([lessOut, tsDir], ['less', 'typescript']);
    gulp.watch('public/*.html').on('change',browserSync.reload);
});




gulp.task('default', ['live-reload']);