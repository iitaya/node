// helloworld8.js
// Itaya Engineering ii/2014/05/05

var http = require('http');
var url = require('url');
var fs = require('fs');

server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at 1337');

function psRequest(req, res){
    var parse = url.parse(req.url);
    switch(parse.pathname){
    case '/text':
        res.setHeader('Content-Type', 'text/html');
        res.write('This is Text.');
        res.end();
        break;
    default:
        fs.readFile('./index8.html', 'UTF-8', psRead);
        function psRead(err, data) {
            var title = "Itaya Engineering";
            var msg = "Message from Itaya Engineering ii/2014/05/05";
            var body = data;
            body = body.replace(/@@title@@/g, title);
            body = body.replace(/@@message@@/g, msg);
            body = body.replace(/@@url@@/g, req.url);
            body = body.replace(/@@path@@/g, parse.pathname);
            body = body.replace(/@@search@@/g, parse.search);
            res.setHeader('Content-Type', 'text/html');
            res.write(body);
            res.end();
        }
        break;
    }
}
