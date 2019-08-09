import { AssertionError } from "assert";

// benchmark/fs/read-stream-throughput.js 中
function runTest() {
    assert(fs.statSync(filename).size === filesize);

    var rs = fs.createReadStream(filename , {
        highWaterMark: size,
        encoding: encoding
    });

    rs.on('open',function() {
        bench.start();
    })

    var bytes = 0;
    rs.on('data',function(chunk) {
        bytes += chunk;
    })

    rs.on('end', function() {
        try {
            fs.unlinkSync(filename)
        }catch(e) {
            bench.end(bytes / (1024*1024));
        }
    })
}