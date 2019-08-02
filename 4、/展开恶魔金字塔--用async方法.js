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

// 用 series（）展开
async.series([
    function(callback){
        fs.readFile('file1.txt','utf-8',callback);
    },
    function(callback){
        fs.readFile('file2.txt','utf-8',callback);
    }
],function(err,result){
    result => [file1.txt,file2.txt]
})
