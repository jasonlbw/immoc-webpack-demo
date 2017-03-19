//命令行：./node_modules/.bin/webpack ./test/hello.js ./test/hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress --display-module --display-reason --watch
require('./world.js');
require('style-loader!css-loader!./style.css');

function hello(str) {
	alert(str);
}

hello('hello world!!!!');