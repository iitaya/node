var http = require("http");

var server = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World, node.js is running.");
    response.end();
}

http.createServer(server).listen(8888);
console.log("node.js is running at localhost:8888")
