# Desktop Images Optimization

Batch PNG, JPEG, GIF, SVG image optimization.

PNG without alpha channel is better to convert to JPEG.

Animated GIFs will cause an error.

#### Clone project
`git clone git@github.com:DenisShapkun/images-optimization.git`

#### Enter project
`cd images-optimization`

#### Install packages
`npm install`

Put images in a folder `app/images`

#### To resize images (if you need) set sizes in the `gulpfile.js` and put images in a folder `app/images/original` and after run

`gulp resize`

After that, you will receive resized images in the folder `app/images/resized`

#### To optimize the images, run 

`gulp`

or

`gulp default`

After that, you will receive optimized images in the folder `dist/images`

#### To clear the cache, run

`gulp clear`