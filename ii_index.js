//
// ii_index.js
// Itaya Engineering ii/2015/01/07 21:20:40
//
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World, node.js is running.");
    response.end();
}).listen(8888);
console.log("node.js is running at localhost:8888")
