import app from '../../globals.js';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

export const iconFont = () => {
  return app.gulp.src(app.path.src.iconFont)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'Task ICONFONT',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(iconfontCss({
      fontName: 'iconFont',
      targetPath: '../../scss/_icons.scss',
      fontPath: app.path.srcFolder + '/fonts/iconFont/',
    }))
    .pipe(iconfont({
      fontName: 'icons',
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(app.gulp.dest(app.path.srcFolder + '/fonts/iconFont/'))
}

