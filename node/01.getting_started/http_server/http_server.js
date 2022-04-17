// A simple HTTP server using NodeJS

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    // send response body
    response.end('My first http server in NodeJS\n');
});

const PORT = 8848;

server.listen(PORT);

console.log(`server running at: http://127.0.0.1:${PORT}/`);