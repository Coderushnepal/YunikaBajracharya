import path from 'path';
import helmet from 'helmet'; // Helmet is Express middleware. It secures Express apps by setting various HTTP headers
import morgan from 'morgan'; // http request logger middleware for node.js
import winston from 'winston';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

const server = express();

server.use(serveFavicon('public/favicon.ico'));
// Create new middleware to serve a favicon from the given path to a favicon file.

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {service: 'basic-curd-operations'},
    transports: [
        new winston.transports.Console({ timestamps: new Date(), colorize: true, level: 'info' }),
    ],
});

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// server.use(morgan('combined'));
server.use(helmet());
server.use(bodyParser.json());

server.get('/', (req, res, next) => {
    res.send('Response from index(/) route');
});

server.get('/usernames', (req, res, next) => {
    logger.info('Fetching all usernames');

    res.send('Response from index(/usernames)  route');
})

server.post('/usernames/address', (req, res, next) => {
    console.log(req.body);
    res.send('Response from POST address(/usernames/address) route');
})

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}\n`);
})