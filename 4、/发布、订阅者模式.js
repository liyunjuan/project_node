// 订阅
emmitter.on('event1',function(message){
    console.log(message);
});

// 发布
emmitter.emit('event1','I am message');