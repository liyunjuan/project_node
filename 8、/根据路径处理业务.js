import { fstat } from "fs";

function(req,res) {
    var pathname = url.parse(req.url).pathname;
    fs.readFile(path.join(ROOT,pathname),function(err,file){
        if(err){
            res.writeHead(404);
            res.end('找不到相关文件。');
            return;
        }
        res.writeHead(200);
        res.end(file);
    })
}