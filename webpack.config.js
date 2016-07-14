var webpack = require("webpack");

module.exports = {
	entry: "./script/app.js",
	resolve: {
		modulesDirectories: [
			"./mainController.js",
			"./contactController.js"
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
					presets: ['es2015']
				}
			}
		]
	},
	// watch: true
};