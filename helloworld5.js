// helloworld5.js
// Itaya Engineering ii/2014/05/05

var http = require('http');
var fs = require('fs');

server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at 1337');

function psRequest(req, res){
    fs.readFile('./index5.html', 'UTF-8', psRead);
    var title = "variable title: Sample Title";
    var msg = "variable message: This is Sample Message, ii/2014/05/05";
	function psRead(err, data) {
        var str = data.replace(/@@title@@/g, title).replace(/@@message@@/, msg);
        res.setHeader('Content-Type', 'text/html');
        res.write(str);
        res.end();
    }
}
