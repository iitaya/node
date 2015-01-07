// ejs01.js
// Itaya Engineering ii/2014/05/05
// Itaya Engineering ii/2015/01/07 19:45:50

var http = require('http');
var url = require('url');
var qs = require('querystring');
var ejs = require('ejs');
var fs = require('fs');

var index = fs.readFileSync('./index_ejs01.html', 'utf8');
var style = fs.readFileSync('./style.css', 'utf8');

var server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at http://localhost:1337');

function psRequest(req, res){
    var parse = url.parse(req.url);
    console.log(parse.pathname);
    switch(parse.pathname){
    case '/':
        var tmp = ejs.render(index, {
            title: "Index Page",
            msg: "This is Sample Page."
        });
        res.setHeader('Content-Type', 'text/html');
        res.write(tmp);
        res.end();
        break;
    case '/style.css':
        res.setHeader('Content-Type', 'text/css');
        res.write(style);
        res.end();
        break;
    default:
        res.setHeader('Content-Type', 'text/plain');
        res.write('Error');
        res.end();
        break;
    }
}
