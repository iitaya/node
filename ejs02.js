// ejs02.js
// Itaya Engineering ii/2014/05/05

var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');

var buf_ejs = fs.readFileSync('./index_ejs02.html', 'utf8');
var buf_css = fs.readFileSync('./style.css', 'utf8');

var server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at http://localhost:1337');

function psRequest(req, res){
    var parse = url.parse(req.url);
    console.log(parse.pathname);
    switch(parse.pathname){
    case '/':
        var ck = req.headers.cookie;
        var tmp = ejs.render(buf_ejs, {
            title: "Index Page",
            msg: "Cookie: " + ck
        });
        res.setHeader('Content-Type', 'text/html');
        res.write(tmp);
        res.end();
        break;
    case '/style.css':
        res.setHeader('Content-Type', 'text/css');
        res.write(buf_css);
        res.end();
        break;
    case '/favicon.ico':
        break;
    default:
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Set-Cookie', ['last_url=' + parse.pathname]);
        res.write('Set Cookie!');
        res.end();
        break;
    }
}
