var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	/*
	 * entry三种取值
	 * 1.字符串路径
	 * 2.字符串路径数组，打包后的文件会暴露出数组中最后一个模块
	 * 3.对象：应用于多种不同用途的包，output中可使用[name]、[hash]、[chunkhash]分别表示对象的键/当前打包的hash/当前模块打包的hash(文件版本号，文件变化时才会变化)
	 */
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},
	output: {
		//path：指定的是最后所有的静态资源输出的目录，最好使用静态资源的根目录，具体资源具体指定相应目录
		path: './dist',
		filename: 'js/[name]-[chunkhash].js',
		//占位符：页面中引用的资源相对路径之前会加上该发布路径(相当于线上的资源路径)
		publicPath: 'http://cdn.com/'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index.html',
			inject: false,/*取值：false(不在页面中插入chunks)/head/body*/
			title: 'this is a.html',
			excludeChunks: ['b', 'c'],
			/*
			chunks: ['main'],
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}*/

			/*
			 * 可自定义参数，在模板中引用即可
			 * 如： date: new Date()，在模板中<%= htmlWebpackPlugin.options.date%>
			 */
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index.html',
			inject: false,
			title: 'this is b.html',
			chunks: ['main', 'b']
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index.html',
			inject: false,
			title: 'this is c.html',
			excludeChunks: ['a', 'b']
		})
	]
}