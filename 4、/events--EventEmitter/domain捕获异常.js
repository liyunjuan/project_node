var domain = require('domain');

var eventDomain = domain.create();

eventDomain.on('err',function(err){
    console.log('已捕获到该异常');
    console.log(err);
});
eventDomain.run(function(){
    process.nextTick(function(){
        let x  = x;
    })
})