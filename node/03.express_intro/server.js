// (npm install express --save) or (yarn add express)

import express from 'express';
import bodyParser from 'body-parser';
// import { Router } from 'express';

const server = express(); // to make server

// simple logging middleware
const loggingMiddleware = (req, res, next) => {
    console.log("\nRequest IP: " + req.ip);
    console.log("Request url: " + req.url);
    console.log("Request method: " + req.method);
    console.log("Request date: " + new Date());
    console.log("\n");

    next(); // so as to move to the next middleware in the stack!
}

server.use(bodyParser.json());
server.use(loggingMiddleware); // loggingMiddleware function will be applied to all methods.

server.get('/', (req, res, next) => {
    response.send('This is response from index(/) route');
});

server.get('/usernames', (req, res, next) => {
    res.send('This is response from usernames(/usernames) route');
});

server.post('/usernames/address', (req, res, next) => {

    console.log(req.body); // gives undefined as to parse the body we need another parser - "body-parser"
    res.send('This is response from POST address(/usernames/address) route');
});

const PORT = 8000;

// This is asynchronous approach
server.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}\n`);
});