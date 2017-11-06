var gulp = require('gulp'),
    rename = require('gulp-rename'),//更改文件名
    cssmin = require('gulp-clean-css'),//压缩css
    htmlmin = require('gulp-htmlmin'),//压缩HTML
    uglify = require('gulp-uglify');//压缩js

//压缩css
gulp.task('cssmin',function(){
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./outcss'));
})

//压缩html
gulp.task('htmlmin',function(){
    gulp.src('./*.html')
        .pipe(htmlmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./outhtml'));
})

//压缩js
gulp.task('uglify',function(){
    gulp.src('./*.js,./js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./outjs'));
})

gulp.task('default',['cssmin','htmlmin','uglify']);