# Desktop Images Optimization

#### Clone project
`git clone git@github.com:DenisShapkun/images-optimization.git`

#### Enter project
`cd images-optimization`

#### Install packages
`npm install`

Put images in a folder `app/images`

#### To resize images (if you need) set sizes in the `gulpfile.js` and put images in a folder `app/images/original` and after run

Make sure [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](https://imagemagick.org/script/download.php) is installed on your system and properly set up in your `PATH`.

Make sure there are no cyrillic characters in the path.

`gulp resize`

After that, you will receive resized images in the folder `app/images/resized`

#### To optimize the images, run 

`gulp`

or

`gulp default`

After that, you will receive optimized images in the folder `dist/images`

#### To clear the cache, run

`gulp clear`