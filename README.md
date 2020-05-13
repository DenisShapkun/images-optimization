# Desktop Image Optimization

#### Clone project
`git clone git@github.com:DenisShapkun/optimize-images.git`

#### Enter project
`cd optimize-images`

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