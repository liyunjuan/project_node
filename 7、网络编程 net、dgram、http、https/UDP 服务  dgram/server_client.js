var dgram = require('dgram');

var message = new Buffer('深入浅出的node.js');

var client = dgram.createSocket('udp4');


// 客户端的send方法的参数，buffer，buffer开始位置，buffer长度，目标端口，目标地址，回调函数
client.send(message,0,message.length,41234,"localhost",function(err,bytes) {
    client.close();
})