const gulp = require('gulp');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const webpack = require('webpack');
const sass = require('gulp-sass');
const packageImporter = require('node-sass-package-importer');
const autoprefixer = require('gulp-autoprefixer');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');

const DEBUG = !process.argv.includes('--prd');
let sassOutputStyle = DEBUG ? 'expanded' : 'compressed';
console.log('DEBUG MODE : ' + DEBUG + ' / ' + sassOutputStyle);


/**************************************************
 * path
 *************************************************/
const paths = {
  'scss': '_sass/**/*.scss', // scssファイルのパス
  'exScss': '!_sass/**/_*.scss', // コンパイル除外するscssファイルのパス（_が付いたcssファイルは除外）
  'webpack': '_js/src/**/*.js', // webpack用jsファイルのパス

  'css': '../htdocs/assets/css/', // cssコンパイル先のパス
  'js': '../htdocs/assets/js/' // jsコンパイル先のパス
};



/**************************************************
 * tasks
 *************************************************/
// webpack
gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err.message);
        this.emit('end');
      }
    }))
    .pipe(gulp.dest(paths.js));
});


// sass
gulp.task('sass-compile', () => {
  return gulp
    .src([paths.scss, paths.exScss])
    .pipe(
      plumber({
        errorHandler: function(err) {
          console.log(err.message);
          this.emit('end');
        }
      })
    )
    .pipe(
      sass({
        outputStyle: sassOutputStyle,
        importer: packageImporter({
          extensions: ['.scss', '.css']
        })
      })
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.css));
});


// watch
gulp.task('watch', () => {
  gulp.watch(paths.scss, gulp.task('sass-compile'));
  gulp.watch(paths.webpack, gulp.task('webpack'));
});


// default
gulp.task('default', gulp.series('watch'));