import app from '../../globals.js';
import fileInclude from 'gulp-file-include'
import webphtml from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'Task HTML',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(fileInclude())
  .pipe(app.plugins.if(app.isBuild, webphtml()))
  .pipe(app.plugins.if(app.isBuild, versionNumber({
    'value': '%DT%',
    'append': {
      'key': '_v',
      'cover': 0,
      'to': ['css', 'js']
    },
    'output': {
      'file': 'gulpConfig/version.json'
    }
  }))
  )
  .pipe(app.plugins.replace(/@img\//g, "img/"))
  .pipe(app.plugins.replace(/@js\//g, "js/"))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browserSync.stream());
}