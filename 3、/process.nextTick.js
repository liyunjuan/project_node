process.nextTick = function(callback){
    // on the way out,don't bother.
    // it won't get fired anyway.
    if(process._exiting) return;
    if(tickDepth >= process.maxTickEdpth)
        maxTickWarn();
    var  tock = {callback : callback};
    if(process.domain ) tock.doman = process.domain;
    nextTickQueue.push(tock);
    if(nextTickQueue.length){
        process._needTickCallback();
    }
};