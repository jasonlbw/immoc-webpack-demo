var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  {
		main: './src-loader/app.js'
	},
	output: {
		path: './dist',
		filename: 'js/[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				/*
				 * 经测试使用绝对路径完全没有改善打包速度，so继续使用相对路径
				 include: path.resolve(__dirname, 'src-loader'),
				 exclude: path.resolve(__dirname, 'node_modules'),
				 */
				include: path.resolve(__dirname, 'src-loader'),
				exclude: path.resolve(__dirname, 'node_modules'),
				
				/*
				 * 1.此配置可写在package.json中，babel: { presets: ['latest'] }
				 * 2.单独建一个.babelrc文件用来配置
				 */
				query: {
					"presets": ["es2015"]
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css?importLoaders=1!postcss'
			},
			{
				test: /\.less$/,
				loader: 'style!css!postcss!less'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.(tpl|ejs)$/,
				loader: 'ejs'
			}
		]
	},
	postcss: [
		require('autoprefixer', {
			broswers: ['last 5 versions']
		})
	],
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index-loader.html',
			inject: 'body'
		})
	]
}