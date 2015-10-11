var gulp = require('gulp');
var uglifyjs = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var minifycss = require('gulp-minify-css');
var webserver = require("gulp-webserver");
var concat = require('gulp-concat');
var del = require('del');

var cssArr = [
    './app/index/assets/css/amend01.css',
    './app/index/assets/css/shortcodes.css',
    './app/index/assets/css/prettyPhoto.css',
    './app/index/assets/css/font-awesome.css',
    './app/index/assets/css/settings-panel.css',
    './app/index/assets/css/skeleton.css',
    './app/index/assets/css/base.css',
    './app/index/assets/css/style.css',
    './app/index/assets/css/mycss.css'
];

var cssUserAdmin = [
    './app/user_admin/assets/css/reset.css',
    './app/user_admin/assets/css/fullcalendar.css',
    './app/user_admin/assets/css/datatable.css',
    './app/user_admin/assets/css/ui_custom.css',
    './app/user_admin/assets/css/prettyPhoto.css',
    './app/user_admin/assets/css/elfinder.css',
    './app/user_admin/assets/css/main.css',
    './app/user_admin/assets/css/mycss.css'
];

var cssAdmin = [
    './app/admin/assets/css/reset.css',
    './app/admin/assets/css/fullcalendar.css',
    './app/admin/assets/css/datatable.css',
    './app/admin/assets/css/ui_custom.css',
    './app/admin/assets/css/prettyPhoto.css',
    './app/admin/assets/css/elfinder.css',
    './app/admin/assets/css/main.css',
    './app/admin/assets/css/mycss.css'
];

/* 合并压缩LESS
gulp.task('minifyless', function () {
    gulp.src('./app/src/less/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./app/assets/minicss'));
});
*/

/* 合并压缩CSS */
gulp.task('minifycss', function() {
    gulp.src(cssArr)                                        //压缩的文件
        .pipe(concat('main.css'))                           //合并
        .pipe(minifycss())                                  //执行压缩
        .pipe(gulp.dest('./app/index/assets/minicss'));           //输出文件夹
});

/* 合并压缩用户后台CSS */
gulp.task('minifyusercss', function() {
    gulp.src(cssUserAdmin)                                       //压缩的文件
        .pipe(concat('main.css'))                               //合并
        .pipe(minifycss())                                      //执行压缩
        .pipe(gulp.dest('./app/user_admin/assets/minicss'));         //输出文件夹
});

/* 合并压缩后台CSS */
gulp.task('minifyadmincss', function() {
    gulp.src(cssAdmin)                                       //压缩的文件
        .pipe(concat('main.css'))                               //合并
        .pipe(minifycss())                                      //执行压缩
        .pipe(gulp.dest('./app/admin/assets/minicss'));         //输出文件夹
});

/* 合并js依赖 */
gulp.task('browserify1', function() {
    browserify('./app/index/src/app.js')
        .transform(babelify)
        .bundle()
        .on('error',function(err){console.log(err.message)})
        .pipe(source('bundle.js'))
        //.pipe(buffer())
        //.pipe(uglifyjs())
        .pipe(gulp.dest('./app/index/build'));
});

gulp.task('browserify2', function() {
    browserify('./app/user_admin/src/app.js')
        .transform(babelify)
        .bundle()
        .on('error',function(err){console.log(err.message)})
        .pipe(source('bundle.js'))
        //.pipe(buffer())
        //.pipe(uglifyjs())
        .pipe(gulp.dest('./app/user_admin/build'));
});

gulp.task('browserify3', function() {
    browserify('./app/admin/src/app.js')
        .transform(babelify)
        .bundle()
        .on('error',function(err){console.log(err.message)})
        .pipe(source('bundle.js'))
        //.pipe(buffer())
        //.pipe(uglifyjs())
        .pipe(gulp.dest('./app/admin/build'));
});

gulp.task('webserver', function() {
    gulp.src('./app')
        .pipe(webserver({
            host: 'localhost',
            port:8800,
            livereload: false
        })
    );
});

gulp.task("cleancss",function(cb){
    del(['./app/index/assets/minicss/*.css','./app/user_admin/assets/minicss/*.css','./app/admin/assets/minicss/*.css'], cb);
});

gulp.task("cleanjs1",function(cb){
    del(['./app/index/build/*.js'], cb);
});

gulp.task("cleanjs2",function(cb){
    del(['./app/user_admin/build/*.js'], cb);
});

gulp.task("cleanjs3",function(cb){
    del(['./app/admin/build/*.js'], cb);
});

gulp.task("watchercss",function(){
    gulp.watch(['./app/index/assets/css/*.css','./app/user_admin/assets/css/*.css','./app/admin/assets/css/*.css'],['cleancss','minifycss','minifyusercss','minifyadmincss']);
});

gulp.task("watcherjs1",function(){
    gulp.watch('./app/index/src/**/*.js',['cleanjs1','browserify1']);
});

gulp.task("watcherjs2",function(){
    gulp.watch('./app/user_admin/src/**/*.js',['cleanjs2','browserify2']);
});

gulp.task("watcherjs3",function(){
    gulp.watch('./app/admin/src/**/*.js',['cleanjs3','browserify3']);
});

gulp.task('default',['minifycss','minifyusercss','minifyadmincss','browserify1','browserify2','browserify3','watchercss','watcherjs1','watcherjs2','watcherjs3','webserver']);
