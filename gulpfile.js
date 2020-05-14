var gulp                   = require('gulp'),
    imagemin               = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant       = require('imagemin-pngquant'),
    imageResize            = require('gulp-image-resize');
    del                    = require('del'),
    cache                  = require('gulp-cache');

// Resize images
// need to test
gulp.task('resize', function () {
  gulp.src('app/images/original/**/*')
    .pipe(imageResize({
      width: 1000,
      height: 1000,
      crop: true,
      upscale: false,
      //format : 'jpeg' // Converting to jpeg
    }))
    .pipe(gulp.dest('app/images/resized'));
});

// Optimize images
gulp.task('compress', function() {
  return gulp.src('app/images/**/*')
  .pipe(cache(imagemin([
    imageminJpegRecompress({
      loops: 4,
      min: 60,
      max: 70,
      quality: 'high' 
    }),
    imageminPngquant({
      quality: [0.6, 0.7]
    }),
    imagemin.gifsicle({
      optimizationLevel: 3,
      interlaced: true
    }),
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