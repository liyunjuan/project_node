var Derferred = function(){
    this.state = 'unfulfilled';
    this.promise = new Promise();
}

Derferred.prototype.resolve = function(obj){
    this.state = 'fulfilled';
    this.promise.emit('success',obj);
}

Derferred.prototype.reject = function(err){
    this.state = 'failed';
    this.promise.emit('error',err);
}

Derferred.prototype.progress = function(data){
    this.promise.emit('progress',data);
}