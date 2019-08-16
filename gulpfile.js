const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

/**
 *
  Level and trials:
  1. 1 trial
  2. 8 trials
  3. 16 trials
  4. 24 trials
  5. 48 trials
  6. 120 trials
  7. 240 trials
 *
 */ 
gulp.task('default', () => {
    gulp.src('./original/*')
        .pipe(imagemin({
                progressive: false,
                optimizationLevel: 7,
                verbose: true
        }))
        .pipe(gulp.dest('./optimized/'))
})
