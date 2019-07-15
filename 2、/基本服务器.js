var http = require('http');
var querystring = require('querystring');

//侦听服务器的 request事件
http.createServer(function(req,res){
	var postData = '';
	req.setEncoding('utf-8');
	//侦听请求的data事件
	req.on('data',function(chunk){
		postData += chunk;
	});
	//侦听请求的end事件
	req.on('end',function(){
		res.end(postData);
	});
}).lensten(8080);
console.log('服务器启动完成');
