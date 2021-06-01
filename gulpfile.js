const {src, dest, series, parallel, watch} = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
sass.compiler = require("node-sass");

const paths = {
    src: {
        sass: "./src/sass/**/*.scss",
        js: "./src/js/**/*.js",
        img_not_optimized: "./src/img/not_optimized/**/*",
        img_optimized: "./src/img/optimized/**/*"
    },
    dest: {
        css: "./dist/css",
        js: "./dist/js",
        img: "./dist/img"
    }
}

function sassCompiler(done) {
    src(paths.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({cascade: false}))
        .pipe(cssnano())
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.dest.css));
    done();
}

function javaScript(done) {
    src(paths.src.js)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ["@babel/env"]}))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.dest.js));
    done();
}

function imageMinify(done) {
    src(paths.src.img_not_optimized)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 60, progressive: true}),
            imagemin.optipng({optimizationLevel: 6}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]})],
            {verbose: "true"}))
        .pipe(dest(paths.dest.img));
    src(paths.src.img_optimized)
        .pipe(dest(paths.dest.img));
    done();
}

function liveServer(done) {
    browserSync.init({server: {baseDir: "./"}});
    done()
}

function liveMonitor(done) {
    watch("*.html").on("change", reload);
    watch([paths.src.sass, paths.src.js], parallel(sassCompiler, javaScript)).on("change", reload)
    done()
}

const mainFunctions = parallel(sassCompiler, javaScript, imageMinify)
exports.default = mainFunctions;
exports.live = series(mainFunctions, liveServer, liveMonitor);
exports.images = imageMinify;