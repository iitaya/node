//
// helloworld1.js
// Itaya Engineering ii/2014/10/17 21:20:01
//
var http = require('http');

var server = http.createServer();
server.on('request', function (req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World #2, ii/2014/10/17\n');
});
server.listen(1337, '127.0.0.1');
console.log('server is running at 1337');
