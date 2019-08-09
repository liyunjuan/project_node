var net = require('net');

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        socket.write('你好');
    });

    socket.on('end', function() {
        console.log('no contented');
    });

    socket.write('welcom to example \n');
});

server.listen(8124, function() {
    console.log('server bound');
})

// 对Domain Socket进行监听
// server.listen('/tmp/echo.sock');