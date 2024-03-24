import gulp from 'gulp';
import app from './globals.js';

import { copy } from "./gulpConfig/tasks/copy.js";
import { reset } from "./gulpConfig/tasks/reset.js";
import { html } from './gulpConfig/tasks/html.js';
import { server } from './gulpConfig/tasks/server.js';
import { scss } from "./gulpConfig/tasks/scss.js";
import { js } from "./gulpConfig/tasks/js.js";
import { images } from "./gulpConfig/tasks/images.js";
import { otfToTtf, fontsStyle, ttfToWoff, copyIconFont } from './gulpConfig/tasks/fonts.js';
import { svgIcons } from './gulpConfig/tasks/svgIcons.js';
import { zip } from './gulpConfig/tasks/zip.js';
import { ftp } from './gulpConfig/tasks/ftp.js';
import { iconFont } from './gulpConfig/tasks/iconfont.js';


function watcher() {
  gulp.watch(app.path.watch.files, copy)
  gulp.watch(app.path.watch.html, html)
  gulp.watch(app.path.watch.scss, scss)
  gulp.watch(app.path.watch.js, js)
  gulp.watch(app.path.watch.images, images)
  gulp.watch(app.path.watch.svgIcons, svgIcons)
}


///tasks
const fonts = gulp.series(copyIconFont, otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, svgIcons, gulp.parallel(copy, html, scss, js, images));
const deployZip = gulp.series(reset, mainTasks, zip)
const deployToFtp = gulp.series(reset, mainTasks, ftp)



const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

//export tasks
gulp.task('default', dev);
gulp.task('build', build);
gulp.task('createSvgSprite', svgIcons);
gulp.task('deployZip', deployZip);
gulp.task('deployFtp', deployToFtp);
gulp.task('iconfont', iconFont);