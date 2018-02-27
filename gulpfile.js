///////////////////////////////////////////////////

const gulp = require('gulp');
const less = require('gulp-less');
const sourceMaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoPrefixer = require('gulp-autoprefixer');

//////////////////////////////////////////////////

var lessDir = 'public/assets/source/less/';
var cssDir = 'public/assets/dist/styles/';


var jsOut = 'public/assets/dist/scripts/';
var jsDir = 'public/assets/source/scripts/**/*.js';

///////////////////////////////////////////////////

gulp.task('less', () => {
    return gulp.src(`${lessDir}main.less`)
        .pipe(sourceMaps.init('./'))
        .pipe(less())
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(sourceMaps.write('/'))
        .pipe(gulp.dest(cssDir));
});
///////////////////////////////////////////////////////

gulp.task('uglify', () => {
    return gulp.src(jsDir)
        .pipe(uglify())
        .pipe(gulp.dest(jsOut))
});

//////////////////////////////////////////////////////////////

gulp.task('watch', () => {
    gulp.watch([`${lessDir}**/*.less`, jsDir], ['less','uglify']);
});

///////////////////////////////////////////////////////

gulp.task('default', ['less', 'uglify','watch']);