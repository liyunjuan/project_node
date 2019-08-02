// 恶魔金字塔
obj.api1(function(value1){
    obj.api2(function(value2){
        obj.api3(function(value3){
            obj.api4(function(value4){
                callback(value4);
            })
        })
    })
})

// 展开上面的恶魔金字塔
var handler1 = function(value1){
    obj.api2(value1,handler1);
}
var handler2 = function(value2){
    obj.api3(value2,handler3);
}
var handler3 = function(value3){
    obj.api4(value3,handler4);
}
var handler4 = function(value4){
    callback(value4);
}
obj.api1(handler1);

// 利用事件展开
var emitter = new event.Emiiter();
emitter.on('step1',function(){
    obj.api1(function(value1){
        emitter.emit('step2',value1);
    })
})
emitter.on('step2',function(value1){
    obj.api2(value1,function(value2){
        emitter.emit('step3',value2);
    })
})
emiiter.on('step3',function(value2){
    obj.api3(value2,function(value3){
        emitter.emit('step4',value3);
    })
})
emitter.on('step4',function(value3){
    obj.api4(value3,function(value4){
        callback(value4);
    })
})
emitter.emit('stpe1');
// 利用事件展开好像更复杂了

// 利用promise展开
promise()
    .then(obj.api1)
    .then(obj.api2)
    .then(obj.api3)
    .then(obj.api4)
    .then(function(value4){
        // some success thing with value4
    },function(err){
        // handle any error from step1 throuth sep4
    })
    .done()