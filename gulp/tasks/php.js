var gulp = require('gulp');
var config = require('../config').php;

gulp.task('php', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
