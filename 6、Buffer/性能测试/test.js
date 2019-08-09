var http = require('http');
var helloworld = "";

for(var i = 0; i < 1024 * 10; i++){
    helloworld += "a";
}

helloworld = new Buffer(helloworld);

http.createServer(function(req,res){
    res.writeHead(200);
    res.end(helloworld);
}).listen(8001);

console.log('start successs');

// 1、启动服务
// 2、通过 ab 测试：ab -c 200 -t 100 http://127.0.0.1/