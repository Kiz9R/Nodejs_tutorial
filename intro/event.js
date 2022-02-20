const EventEmitter = require('events');
const http = require('http');

const server = http.createServer();

const customeEmitter = new EventEmitter();


// event emitter
customeEmitter.on('response',()=>{
    console.log(`data recieved`)
});

customeEmitter.on('response',(name,id)=>{
    console.log(`logical reason, ${name},${id}`);
});

customeEmitter.emit('response','kiz9r',13);

customeEmitter.on('response',()=>{
    console.log(`logical reason 0`);
});

// server creation
server.on('request',(req,res)=>{
    res.end('Welcome');
});

server.listen(5000);