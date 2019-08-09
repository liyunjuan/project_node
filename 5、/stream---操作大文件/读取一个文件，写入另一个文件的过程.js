var reader = fs.createReadStream('in.txt');
var writer = fs.createWriteStream('out.txt');

reader.on('data',function(chunk){
    writer.write(chunk);
});
reader.on('end',function(){
    writer.end();
});


// 以上代码更简洁，更健壮的写法，通过管道，不会受到V8内存限制的影响
reader.pipe(writer);