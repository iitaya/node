var http = require('http');
server = http.createServer();
server.on('request', processRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at 1337');

function processRequest(req, res){
    res.setHeader('Content-Type', 'text/html');
	res.write('<html>\n');
	res.write('<head><title>Hello World</title></head>\n');
	res.write('<body>\n');
	res.write('<h1>Hello World</h1>\n');
	res.write('<hr>\n');
	res.write('<p>Itaya Engineering ii/2014/05/05, file = hello world3.js</p>\n');
	res.write('</body>\n');
	res.write('</html>\n');
	res.end();
}
