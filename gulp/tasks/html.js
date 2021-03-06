import gulp from 'gulp';
import config from '../config';
import fileinclude from 'gulp-file-include';

export const htmlBuild = () => (
  gulp.src(`${config.src.html}/**/*.html`)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.dest.dest))
);

export const htmlWatch = () => gulp.watch(`${config.src.html}/**/*.html`, htmlBuild);
