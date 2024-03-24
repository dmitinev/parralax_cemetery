import app from '../../globals.js';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import joinMediaQueries from 'gulp-join-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'Task SASS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.if(app.isBuild, joinMediaQueries({log: app.isBuild})))
    .pipe(app.plugins.if(app.isBuild, webpCss({
      webpClass: '.webp',
      noWebpClass: '.no-webp'
    })))
    .pipe(app.plugins.if(app.isBuild, autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    })))
    .pipe(app.gulp.dest(app.path.build.css)) //comment this line if you do not need uncompressed css file
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}