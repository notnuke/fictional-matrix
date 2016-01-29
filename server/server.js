var http = require('http');
var lodash = require('lodash');

var webServer = function(req,res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});
	var nickname = lodash.without(['sweet','pumpkin'],'pumpkin');
	
	res.end('Hello my ' + nickname + '!\n');
};

http.createServer(webServer).listen(4112,'127.0.0.1');
http.createServer(webServer).listen(4112,'192.168.1.104');

console.log('Server running at http://127.0.0.1:4112/');
