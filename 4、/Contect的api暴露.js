var app = content();

// Middleware，通过use注册
app.use(content.staticeCache());
app.use(content.static(__dirname + '/publice'));
app.use(content.cookieParser());
app.use(content.session());
app.use(content.query());
app.use(content.bodyParser());
app.use(content.csrf());
app.listen(3001);

// 中间件利用尾触发机制
function (req,res,next){
    // 中间件
}