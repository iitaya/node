// ejs03.js
// Itaya Engineering ii/2014/05/06

var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');
var cookie = require('cookie');

var ejs_buf = fs.readFileSync('./index_ejs02.html', 'utf8');
var css_buf = fs.readFileSync('./style.css', 'utf8');

var server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at http://localhost:1337');

function psRequest(req, res){
    var url_p = url.parse(req.url);
    var pathname = url_p.pathname;
    console.log(pathname);
    
    var ck_p = {};
    if (req.headers.cookie != null) {
        ck_p = cookie.parse(req.headers.cookie);
    }
    
    switch (pathname){
    case '/':
        var render = ejs.render(ejs_buf, {
            title: "Index Page",
            msg: "last_url: " + ck_p.last_url + ', last_time: ' + ck_p.last_time
        });
        res.setHeader('Content-Type', 'text/html');
        res.write(render);
        res.end();
        break;
    case '/style.css':
        res.setHeader('Content-Type', 'text/css');
        res.write(css_buf);
        res.end();
        break;
    case '/favicon.ico':
        break;
    case '/time':
        var dt = new Date().toDateString();
        var ck_s = cookie.serialize('last_time', dt, {maxAge: 1000});
        res.setHeader('Set-Cookie', ck_s);
        res.setHeader('Content-Type', 'text/plain');
        res.write('Set Cookie!, ' + ck_s);
        res.end();
        break;
    default:
        var ck_s = cookie.serialize('last_url', pathname, {maxAge: 1000});
        res.setHeader('Set-Cookie', ck_s);
        res.setHeader('Content-Type', 'text/plain');
        res.write('Set Cookie!, ' + ck_s);
        res.end();
        break;
    }
}
