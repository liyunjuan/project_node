var fs = require('fs');

fs.open = function(path,flags,mode,callback){
    //...
    binding.open(pathModule._makeLong(path),stringToFlags(flags),mode,callback);
}