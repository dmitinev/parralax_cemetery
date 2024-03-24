import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const jsFileName = `app`; // change to your desired file name

export const path = {
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/${jsFileName}.js`,
    svg: `${srcFolder}/img/**/*.svg`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svgIcons: `${srcFolder}/svgicons/*.svg`,
    iconsPackDest: `${srcFolder}/img/`,
    iconFont: `${srcFolder}/iconFontIcons/**/*.svg`,
  },
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    svgIcons: `${srcFolder}/svgicons/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  jsFileName: `${jsFileName}.js`,
  ftp: `` //indicate name of the folder to be created on ftp server
}