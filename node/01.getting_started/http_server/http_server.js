// A simple HTTP server using NodeJS

import http from 'http';
// const http = require('http'); -> older format

// this callback is asynchronous
const server = http.createServer((request, response) => {
    response.end(`<h1>This is my first http server in NodeJS</h1>\n`);
});

const PORT = 8000;

server.listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);