const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
 
imagemin(['assets/imgs/*.jpeg'], 'build/images', {use: [imageminJpegtran()]}).then(() => {
    console.log('Images optimized');
});