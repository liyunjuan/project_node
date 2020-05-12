var crypto = require('crypto');

var val = crypto.createHash('sha1').update(key).digest('base64');