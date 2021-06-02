const {src, dest, series, parallel, watch} = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const clean = require('gulp-clean');
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const kit = require("gulp-kit")
const plumber = require('gulp-plumber');
sass.compiler = require("node-sass");

const paths = {
    src: {
        sass: "./src/sass/**/*.scss",
        js: "./src/js/**/*.js",
        img_all: "./src/img/**/*",
        img_not_optimized: "./src/img/not_optimized/**/*",
        img_optimized: "./src/img/optimized/**/*",
        html: "./html/**/*.kit"
    },
    dest: {
        css: "./dist/css",
        js: "./dist/js",
        img: "./dist/img",
        dist: "./dist",
        root: "./"
    }
}

function sassCompiler(done) {
    src(paths.src.sass)
        .pipe(plumber())
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
        .pipe(plumber())
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
        .pipe(plumber())
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

function cleanDist(done) {
    src(paths.dest.dist, {read: false})
        .pipe(plumber())
        .pipe(clean());
    done()
}

function handleKits(done) {
    src(paths.src.html)
        .pipe(plumber())
        .pipe(kit())
        .pipe(dest(paths.dest.root))
    done();
}

function liveServer(done) {
    browserSync.init({server: {baseDir: "./"}});
    done()
}

function liveMonitor(done) {
    watch("*.html").on("change", reload);
    watch([paths.src.sass, paths.src.js, paths.src.html], parallel(handleKits, sassCompiler, javaScript)).on("change", reload)
    done()
}

const mainFunctions = parallel(handleKits, sassCompiler, javaScript, imageMinify);
exports.default = mainFunctions;
exports.live = series(mainFunctions, liveServer, liveMonitor);
exports.images = imageMinify;
exports.clean = cleanDist;