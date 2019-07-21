var emitter = new events.EventEmitter();
var done = after(times,render);


emitter.on('done',done);
emitter.on('done',other);