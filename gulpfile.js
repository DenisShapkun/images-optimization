var gulp         = require('gulp'),
    imageResize  = require('gulp-image-resize');
    imagemin     = require('gulp-imagemin'),
    imgCompress  = require('imagemin-jpeg-recompress'),
    del          = require('del'),
    cache        = require('gulp-cache');

// Resize images
// https://www.npmjs.com/package/gulp-image-resize
gulp.task('resize', function () {
  return gulp.src('app/images/original/**/*')
    .pipe(imageResize({
      width: 1000,
      height: 1000,
      crop: true,
      upscale: false
    }))
    .pipe(gulp.dest('app/images/resized'));
});

// Optimize images
gulp.task('compress', function() {
  return gulp.src('app/images/**/*')
  .pipe(cache(imagemin([
    imgCompress({
      loops: 4,
      min: 60,
      max: 70,
      quality: 'high' 
    }),
    imagemin.gifsicle(),
    imagemin.optipng(),
    imagemin.svgo()
  ])))
  .pipe(gulp.dest('dist/images'));
});

// Cleaning Production distributive
gulp.task('clean', function(done) {
  del.sync('dist');
  done();
});

// Clear Cache
gulp.task('clear', function() {
  return cache.clearAll();
});

// Build Production distributive with all updates
gulp.task('default', gulp.series('clean', 'compress'));