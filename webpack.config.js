import path from 'path';
import paths from './paths.js';
import webpack from 'webpack';
import nib from 'nib';
import rupture from 'rupture';
import jeet from 'jeet';
import axis from 'axis';
import typographic from 'typographic';
import autoprefixer from 'autoprefixer-stylus';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var webpackPaths = {
	bootstrap: path.join(paths.assets, 'app/app.js'),
	index: path.join(paths.assets, 'index.html')
};

export default {
	watch: true,
	cache: true,
	entry: ["webpack/hot/dev-server", webpackPaths.bootstrap],
	output: {
		path: paths.tmp,
		filename: 'bundle.js'
	},
	resolve: {
		root: [path.join(paths.assets, 'vendor')]
	},
	module: {
		loaders: [
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style', 'css!stylus')
			},
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules|vendor)/
			},
			{ test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file" },
			{ test: /\.eot$/,    loader: "file" },
			{ test: /\.svg$/,    loader: "file" }
		],
		resolve: {
			extensions: ['', '.js', '.styl']
		}
	},
	plugins: [
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			blocks: "blocks"
		}),
		new ExtractTextPlugin("style.css", {
			allChunks: true
		})
	],
	stylus: {
		use: [nib(), jeet(), axis(), autoprefixer(), rupture(), typographic()]
	}
}