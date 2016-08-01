var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: "./script/app.js",

	resolve: {
		modulesDirectories: [
			"./node_modules/"
		]
	},

	output: {
		filename: "dist/script.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ['es2015'],
					compact: false
				}
			},
			{
				test: /\.(png|jpg|woff)$/,
				loader: 'file?name=/[path][name].[ext]'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css')
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!less')
			}
		]
	},
	postcss: function () {
		return [autoprefixer];
	},
	plugins: [
		new ExtractTextPlugin('dist/style.css')
	]
};