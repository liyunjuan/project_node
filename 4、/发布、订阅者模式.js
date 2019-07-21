var events = require('events');
var emitter = new events.EventEmitter();

// 订阅，观察者
emitter.on('event1',function(message){
    console.log(message);
});

// 发布
emitter.emit('event1','I am message');