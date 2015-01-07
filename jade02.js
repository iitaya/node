// jade02.js
// Itaya Engineering ii/2014/05/06

var http = require('http');
var url = require('url');
var jade = require('jade');
var qs = require('querystring');
var fs = require('fs');

var jade_buf = fs.readFileSync('./index02.jade', 'utf8');
var css_buf = fs.readFileSync('./style.css', 'utf8');

var server = http.createServer();
server.on('request', psRequest);
server.listen(1337, '127.0.0.1');
console.log('server is running at http://localhost:1337');

function psRequest(req, res){
    var url_p = url.parse(req.url);
    var pathname = url_p.pathname;
    console.log(pathname);
    
    switch (pathname){
    case '/':
        var fn = jade.compile(jade_buf);
        if (req.method == 'POST'){
            var postData = '';
            req.on('data', function(data){
                postData += data;
            });
            req.on('end', function(){
                var form = qs.parse(postData);
                var render = fn({
                    title: 'Form Test Page',
                    message: 'form data: ',
                    form: form
                });
                res.setHeader('Content-Type', 'text/html');
                res.write(render);
                res.end();
            });
            
        } else {
            var render = fn({
                title: 'Form Test Page',
                message: 'Enter data: ',
                form: {name: '', mail: '', age:''}
            });
            res.setHeader('Content-Type', 'text/html');
            res.write(render);
            res.end();
        }
        break;
    case '/style.css':
        res.setHeader('Content-Type', 'text/css');
        res.write(css_buf);
        res.end();
        break;
    case '/favicon.ico':
        break;
    default:
        res.setHeader('Content-Type', 'text/plain');
        res.write('No Page');
        res.end();
        break;
    }
}
