//
// helloworld1.js
// Itaya Engineering ii/2014/10/17 21:27:39
//

var http = require('http');
var server = http.createServer();
var fs = require('fs')

server.on('request', function (req, res){
    res.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('./object5.png').pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log('server is running at 3000');
