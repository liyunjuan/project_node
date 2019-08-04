var EventProxy = require('eventproxy');

var proxy = new EventProxy();
proxy.all('content','data',function(content,data){
    callback(null,[content,data]);
});
proxy.file(callback);

fs.readFile('file1.txt','utf-8',proxy.done('content'));
fs.readFile('file2.txt','utf-8',proxy.done('data'));
