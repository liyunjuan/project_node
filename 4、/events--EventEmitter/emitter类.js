class EventEmitter{
    constructor (){
        this.handles = {};
    }

    on(eventName,callback){
        if(!this.handles){
            this.handles = {};
        }
        if(!this.handles[eventName]){
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(callback);
    }

    emit(eventName,...arg){
        if(this.handles[eventName]){
            for(var i=0;i<this.handles[eventName].length;i++){
                this.handles[eventName][i](...arg);
            }
        }
    }
}


// 实例化上面的类
let event = new EventEmitter();
event.on('sayName',function(str){
    console.log(str)
});

event.emit('sayName','I am lyj');

// let event1 = new EventEmitter();
// event1.on('sayName',function(str){
//     console.log(str);
// })
event.emit('sayName','aaaaaaaaaaaaaa');
event.emit('sayName','wwwyy')