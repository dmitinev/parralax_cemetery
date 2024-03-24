import app from '../../globals.js';
import webpack from 'webpack-stream';
import config from '../../webpack.config.js';

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'Task JS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(webpack(config))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
}