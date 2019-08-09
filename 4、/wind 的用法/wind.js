// var task = readFileAsync('file1','utf-8');

var serial = eval(wind.compile('async',function(){
    var file1 = $await(readFileAsync('file1.txt','utf-8'));
    console.log(file1);
    
    var file2 = $await(readFileAsync('file2.txt','utf-8'));
    console.log(file2);
    
    try {
        var file3 = $await(readFileAsync('file3.txt','utf-8'));
    }catch (err){
        console.log(err);
    }
}));