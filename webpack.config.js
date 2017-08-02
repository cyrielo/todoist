const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const entryPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

const config = {
	entry: entryPath + '/index.js',

	output: {
		path: outputPath,
		filename: 'bundle.min.js'
	},

	devtool: "source-map",

	devServer: {
		port: 9000,
		contentBase: 'dist/',
		inline: true
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: ['babel-loader']
			},
			{
				test: [/\.css$/, /\.scss$/],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		],
	},

	plugins: [
		new ExtractTextPlugin("bundle.min.css")
	]
};

module.exports = config;
