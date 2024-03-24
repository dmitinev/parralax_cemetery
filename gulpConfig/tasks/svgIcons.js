import svgSprite from 'gulp-svg-sprite'
import app from '../../globals.js';

export const svgIcons = () => {
  return app.gulp.src(app.path.src.svgIcons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'Task SVG Sprite',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/svgIcons.svg`,
          example: true
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.dest(app.path.src.iconsPackDest))
}