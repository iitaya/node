// helloworld4.js
// Itaya Engineering ii/2014/05/05

var http = require('http');
var fs = require('fs');

server = http.createServer();
server.on('request', cbRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at 1337');

function cbRequest(req, res){
    fs.readFile('./index.html', cbRead);
	
	function cbRead(err, data) {
	    res.setHeader('Content-Type', 'text/html');
		res.write(data);
        res.end();		
	}
}
