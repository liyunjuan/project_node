var fs = require('fs');


// var rs = fs.createReadStream('test.md');
var rs = fs.createReadStream('test.md',{highWaterMark:11});
rs.setEncoding('utf8');

var data = '';
rs.on('data',function(chunk){
    data += chunk;
});
rs.on('end',function(){
    console.log(data);
});


// fs.createReadStream('test.md');  这种方式对于宽字节的中文会有问题
// 针对上诉问题可以限制长度为11  用{highWaterMark：11}
// 上诉问题可能会导致编码失败，显示问号
// 针对上诉问题可以用setEncoding()方法