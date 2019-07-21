var after = function(times,callback){
    var count = 0,results = {};
    return function(key,value){
        results[key] = value;
        count ++;
        if(count === times){
            callback(results);
        }
    }
}

var done = after(tiems,render);

// 这种方案实现了  多对一  的效果
