// 模板读取

// 数据读取

// 页面渲染


var count = 0;
var results = {};
var done = function(key,value){
    results[key] = value;
    count ++;
    if(count == 3){
        // 渲染页面
        render(results);
    }
};

var fs = require('fs');
fs.readFile(template_path,'utf8',function(err,template){
    done('template',template);
});

db.query(sql,function(err,data){
    done('data',data);
})

110n.get(function(err,resources){
    done('resources',resources);
})

// 由于上面3个回调不知道完成的顺序，而且三个回调之间没有任何交集，所以需要第三个函数和第三方变量来处理
// 异步协作的结果，这个检测次数的叫做哨兵变量，所以我们可以用偏函数来处理