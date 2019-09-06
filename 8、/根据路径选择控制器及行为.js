function(req,res) {
    var pathname = url.parse(req.url).pathname;
    var paths = pathname.split('/');
    var controller = paths[1] || 'index';
    var action = paths[2] || 'index';
    var args = paths.slice(3);
    if(handles[controller] && handles[controller][action]) {
        handles[controller][action].apply(null,[req,res].concat(args));
    }else {
        res.writeHead(500);
        res.end('找不到响应服务器');
    }
}