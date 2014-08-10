var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var data = require('./assets/data')
var ejs = require("gulp-ejs")

gulp.task('default', function() {
  gulp.start('build')
})

gulp.task('build', function () {
    gulp.src('./assets/index.html')
        .pipe(ejs({books: data}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'))
})
