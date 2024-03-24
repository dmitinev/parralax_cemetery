import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import replace from 'gulp-replace';

import {path} from "./gulpConfig/path.js";

const app = {
  gulp: gulp,
  path: path,
  plugins: {
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
    replace: replace
  },
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
}

export default app;