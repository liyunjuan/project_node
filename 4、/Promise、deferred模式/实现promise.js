var Promise = function(){
    EventEmitter.call(this);
};
util.inherits(Promise,EventEmitter);

Promise.prototype.then = function(fulfilledHandler,errorHandler,processHandler){
    if(typeof fulfilledHandler === 'function'){
        // 利用once方法，保证只调用一次
        this.once('success',fulfilledHandler);
    }

    if(typeof errorHandler === 'function'){
        this.once('error',errorHandler);
    }

    if(typeof processHandler === 'function'){
        this.on('progress',processHandler);
    }

    return this;
}