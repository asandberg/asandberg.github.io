const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const ghPages = require('gulp-gh-pages');
const gulpReplace = require('gulp-replace');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);


gulp.task('pathfix', function() {
    console.log("Pathfix");
    return gulp.src([
      './dist/**/*.js',
      './dist/**/*.html'
    ])
    .pipe(gulpReplace('"/img/', '"/src/img/'))
    .pipe(gulpReplace('(/img/', '(/src/img/'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', function() {
  return gulp.src([
    './dist/**/*',
    '.nojekyll',
    'CNAME'
  ])
  .pipe(ghPages({ branch: 'master', force: true }));
});

gulp.task('web', gulp.series('build', 'pathfix', 'deploy'));

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.tmp('index.html'), reloadBrowserSync);
  done();
}
