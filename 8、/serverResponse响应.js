var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"ContentType":"text/plain"});
    res.end('hello world\n');
}).listen(1337,'127.0.0.1');

console.log('Server running at http:127.0.0.1:1337');