var gulp                   = require('gulp'),
    // imagemin               = require('gulp-imagemin'),
    imagemin               = require('gulp-imagemin-fix'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant       = require('imagemin-pngquant'),
    imageResize            = require('gulp-image-resize');
    del                    = require('del'),
    cache                  = require('gulp-cache'),
    parallel               = require("concurrent-transform"),
    os                     = require("os"),
    plumber                = require('gulp-plumber');

// Resize images
// need to test
gulp.task('resize', function () {
  return gulp.src('app/images/original/**/*.{jpg,jpeg,png,gif}')
    .pipe(parallel(
      imageResize({
      width: 920,
      //height: 1080,
      crop: false,
      upscale: false,
      //format : 'jpg' // Converting to jpeg
    }),
    os.cpus().length
    ))
    .pipe(gulp.dest('app/images/resized'));
});

// Optimize images
gulp.task('compress', function() {
  return gulp.src('app/images/**/*')
  //.pipe(plumber())
  .pipe(cache(imagemin([
    imageminJpegRecompress({
      loops: 4,
      min: 70,
      max: 80,
      quality: 'high' 
    }),
    imageminPngquant({
      quality: [0.7, 0.8]
    }),
    imagemin.gifsicle({
      optimizationLevel: 3,
      interlaced: true
    }),
    imagemin.svgo()
  ], {
    //verbose: true
  })))
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
// gulp.task('default', gulp.series('compress'));