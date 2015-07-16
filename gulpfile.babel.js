import del from 'del';
import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import runSequence from 'run-sequence';

import paths from './paths.js';
import webpackConfig from './webpack.config.js';

const $ = gulpLoadPlugins();

var src = {
	index: path.join(paths.assets, 'index.html')
};
var clear = [
	path.join(paths.tmp, '*'),
	path.join(paths.dist, '*'),
	path.join('!', paths.dist, '.git')
];

gulp.task('webpack:server', (cb) => {
	new webpackDevServer(webpack(webpackConfig), {
		hot: true,
		contentBase: paths.tmp,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		stats: {
			colors: true
		}
	}).listen(8080, 'localhost', (err) => {
		if (err) throw new gutil.PluginError('webpack-dev-server', err);
		gutil.log('[webpack:server]', "http://localhost:8080/webpack-dev-server/");
		cb();
	});
});
gulp.task('webpack:build', (cb) => {
	webpack(webpackConfig, (err, stats) => {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		cb();
	})
});

gulp.task('tmp', () => {
	gulp.src(src.index)
		.pipe(gulp.dest(paths.tmp));
});
gulp.task('clean', cb => del(clear, {dot: true}, cb));

gulp.task('serve', () => {
	gulp.watch(src.index, ['tmp']);
});

gulp.task('default', ['clean'], cb => {
	runSequence(
		['tmp', 'serve'],
		['webpack:server'],
		cb
	)
});
gulp.task('build', ['clean'], cb => {
	runSequence(
		['webpack:build'],
		cb
	)
});