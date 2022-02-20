const http=require('http');

const server=http.createServer((req, res) => {
    if(req.url==='/'){
        res.end('Welcome');
    }
    if(req.url==='/about'){
        res.end('nothing to see here');
    }
    res.end(`<h1>oops!</h1>
    <p>Page doesn't exist!</p>
    <a href="/">back home</a>`);
});

server.listen(5000);