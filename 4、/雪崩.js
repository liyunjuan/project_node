import { EventEmitter } from "events";

// 雪崩是指数据库承受不了大量的sql语句

// 添加状态锁
var status = 'ready';

var select = function(callback){
    if(status === 'ready'){
        status = 'pending';

        db.select('SQL',function(result){
            status = 'ready';
            callback(result);
        })
    }
}
// 以上状态锁的方法只在第一次有效，后续的select() 没有数据服务，用以下方式改进
// 事件队列
var proxy = new events.EventEmitter();
var status = 'ready';
var select = function(callback){
    proxy.once('selected',callback);
    if(status == 'ready'){
        status = 'pending';
        db.select('SQL',function(result){
            proxy.emit('selected',result);
            status = 'ready';
        })
    }
}


