const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', async ()=>{
    gulp.src('app.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dest'))
});