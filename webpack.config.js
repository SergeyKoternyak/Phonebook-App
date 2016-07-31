var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./script/app.js",

	resolve: {
		modulesDirectories: [
			"./node_modules/"
		]
	},

	output: {
		filename: "script.js"
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
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css!less')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};