// helloworld6.js
// Itaya Engineering ii/2014/05/05

var http = require('http');
var url = require('url');
var fs = require('fs');

server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at 1337');

function psRequest(req, res){
    fs.readFile('./index6.html', 'UTF-8', psRead);
    var title = "Itaya Engineering";
    var msg = "Message from Itaya Engineering ii/2014/05/05";
	function psRead(err, data) {
        var body = data.replace(/@@title@@/g, title)
        body = body.replace(/@@message@@/g, msg);
        body = body.replace(/@@url@@/g, req.url);
        res.setHeader('Content-Type', 'text/html');
        res.write(body);
        res.end();
    }
}
