;(function (name,definition) {
    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function',
        hasExports = typeof module !== 'undefined' && module.exports;
    
    if(hasDefine){
        define(definition);
    }else if(hasExports){
        module.exports = definition();
    }else{
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window
        this[name] = definition();
    }
})('hello',function(){
    var hello = function(){};
    return hello;
})