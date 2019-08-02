function createServer(){
    // 创建了HTTP服务器的request事件处理函数
    function app(req,res){
        app.handle(req,res);
    }
    utils.merge(app,proto);
    utils.merge(app,EventEmitter.prototype);
    app.route = '/';
    app.stack = [];
    for(var i=0;i<arguments.length;++i){
        app.use(arguments[i]);
    }
    return app;
}


// 使用
app.use = function(route,fn){
    // some code
this.stack.push({    
        route:route,
        handle:fn
    });
}

// 通过原生http模块实现监听
app.listen = function(){
    var server = http.createServer(this);
    return server.listen.apply(server,arguments);
}

// 最终回到app.handle() 方法
app.handle = function(req,res,out){
    // some code
    next();
}

// next() 方法
function next(){
    // some code
    // next callback
    layer = stack[index++];
    layer.handle(req,res,next);
}