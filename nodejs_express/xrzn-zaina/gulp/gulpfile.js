var gulp = require('gulp');
var rename = require('gulp-rename');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var requirejs = require('gulp-requirejs-simple');

var bPath = '../public/';
var paths = {
    css: [bPath + 'css/*.css', '!' + bPath + 'css/*-min.css'], //需要监控变化的css文件
    jss: [bPath + 'js/**/*.js', '!' + bPath + 'js/*-min.js'], //需要监控变化的js文件
    js: bPath + 'js/'
};

var minJsTask = {
    main: { //压缩main.js
        requireJs: true,
        baseUrl: paths.js,
        name: 'main',
        out: paths.js + '/main-min.js',
        mainConfigFile: paths.js + 'config.r.js',
        watchFile: [bPath + 'js/*.js', '!' + bPath + 'js/*-min.js', '!' + bPath + 'js/index.js', '!' + bPath + 'js/front.js'] //需要监控变化的js文件
    },
    track: { //压缩track-main.js
        requireJs: true,
        baseUrl: paths.js,
        name: 'track-main',
        out: paths.js + '/track-main-min.js',
        mainConfigFile: paths.js + 'config.r.js',
        watchFile: [bPath + 'js/*.js', '!' + bPath + 'js/*-min.js', '!' + bPath + 'js/index.js', '!' + bPath + 'js/front.js'] //需要监控变化的js文件
    },
    index: {
        requireJs: false,
        baseUrl: paths.js,
        name: 'index.js',
        dest: paths.js,
        watchFile: [bPath + 'js/index.js']
    },
    front: {
        requireJs: false,
        baseUrl: paths.js,
        name: 'front.js',
        dest: paths.js,
        watchFile: [bPath + 'js/front.js']
    }
    // ,b_track: {//压缩bmap track-main.js
    //     baseUrl: paths.js,
    //     name: 'track-main',
    //     out: paths.js + 'out/track-main.js',
    //     mainConfigFile: paths.js + 'config.r.js',
    //     watchFile : [bPath + 'js/*.js']//需要监控变化的js文件
    // }
}

var jsTaskArr = [];

for (task in minJsTask) {
    if (minJsTask[task].requireJs) {
        gulp.task(task, requirejs(minJsTask[task]));
    } else {
        (function(task) {
            gulp.task(task, function() {
                gulp.src(minJsTask[task].baseUrl + minJsTask[task].name)
                    .pipe(uglify())
                    .pipe(rename({
                        suffix: '-min'
                    }))
                    .pipe(gulp.dest(minJsTask[task].dest));
                console.log(task);
            });
        })(task);
    };
    jsTaskArr.push(task);
};


gulp.task('mincss', function() {
    //var filter = gulpFilter(['*', '!*-min.css']);
    return gulp.src(paths.css)
        .pipe(minifyCSS({
            //keepBreaks: true
        }))
        .pipe(rename({
            suffix: '-min'
        }))
        .pipe(gulp.dest(bPath + '/css/'));
});

gulp.task('minjs', jsTaskArr);

gulp.task('watch', function() {
    console.log(jsTaskArr);
    for (task in minJsTask) {
        gulp.watch(minJsTask[task].watchFile, [task]);
    };
    gulp.watch(paths.css, ['mincss']);
});
