import {ftpConfig} from '../ftpConfig.js'
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';
import app from '../../globals.js';

export const ftp = () => {
  configFtp.log = util.log;
  const ftpConnect = vinylFTP.create(ftpConfig);
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'Task FTP',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
}
