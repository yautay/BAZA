const {src, dest} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function sassCompiler() {
    src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src/css'));
}

// function watch(){
//
// }
//
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });