// 以下代码是stream对象继承EventEmitter对象
var events = require('events');

function Stream(){
    events.EventEmitter.call(this);
}

util.inherits(Stream,EventEmitter);