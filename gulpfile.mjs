import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// Define paths
const paths = {
    images: {
        src: 'src/images/dada.jpg', // Source folder for images
        dest: 'dist/images'  // Destination folder for optimized images
    },
    html: {
        src: 'src/*.html',    // Source HTML files
        dest: 'dist/'         // Destination for HTML files
    }
};

// Task to optimize images
export const optimizeImages = () => {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
};

// Task to copy HTML files
export const copyHtml = () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
};

// Default task
const build = gulp.series(optimizeImages, copyHtml);

export default build;
