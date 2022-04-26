import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import winston from 'winston';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';
import { userInfo } from 'os';

const server = express();

server.use(serveFavicon('public/favicon.ico'));

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {service: 'basic-curd-operations'},
    transports: [
        new winston.transports.Console({ timestamps: new Date(), colorize: true, level: 'info' }),
    ],
});

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
server.use(helmet());
server.use(bodyParser.json());

server.get('/', (req, res, next) => {
    res.send('Response from index(/) route');
});

//-----------------------------GET METHOD----------------------------------
server.get('/usernames', (req, res, next) => {
    logger.info('Fetching all usernames: Reading from the file');

    fs.readFile('data.txt', (err, data) => {
        if (err) {
            logger.error(`Error reading from file: ${err.message}`);
            
            res.status(400).json({
                message: `Error reading from file`,
            });

            return;
        }

        const str = data
            .toString() // data is buffer type so convert to string
            .split('\n') // each line is an array element
            .filter((a) => !!a) // return only if there is data
            .map((row) => JSON.parse(row)); // changing string to object

        res.json({
            message: "Displaying records: ",
            data: str,
        });

    });
});

//-------------------------------GET WITH ID-----------------------------------------------
server.get('/usernames/:usernameIdentifier', (req, res, next) => { // :give dynamic notation
    const usernameId = +
    req.params.usernameIdentifier;
    
    logger.info(`This is the GET method for usernameId ${usernameId}`);

    fs.readFile('data.txt', (err, data) => {
        if (err) {
            logger.error(`Error reading from file: ${err.message}`);

            res.status(400).json({
                message: `Error reading from file`,
            })

            return;
        }

        const userInfo = data
            .toString()
            .split('\n') 
            .find( (a) => !!a && (JSON.parse(a)).id === usernameId ); // only take the data whose id matches with the id we sent in url. 
            // JSON.parse(a) -> this changes the string to object

        if (!userInfo) {
            logger.error(`Couldn't find the user id: ${usernameId}`);

            res.status(404).json({
                message: `Couldn't find the user id: ${usernameId}`,
            });
        
            return;
        }

        res.json({
            message: `Displaying record for usernameId ${usernameId}`, 
            data: JSON.parse(userInfo),
        });

    });

});

//--------------------------------POST--------------------------------
server.post('/usernames', (req, res, next) => {
    logger.debug('Payload received', req.body);

    const insertParams = {
        id: Date.now(),
        ...req.body,
    }

    const insertData = JSON.stringify(insertParams) + '\n'; 

    logger.info('checking if file exists\n');

    fs.readFile('data.txt', (err, data) => {
        if (err) {
            logger.error(`File not found`);

            res.status(404).json({
                message: `File not found`,
            })

            return;
        }

        const userInfo = data
            .toString()
            .split('\n') 
            .find( (a) => {
                if (!a) return false;

                const parsedData = JSON.parse(a);

                const alreadyExists = insertParams.username === parsedData.username && insertParams.address === parsedData.address;
                return alreadyExists;
            });

            if (userInfo) {
                logger.error('The username already exists');

                res.status(404).json({
                    message: 'The username already exists',
                });

                return;
            }

            logger.info(`File existence verified. Now writing to the file.\n`)

        fs.appendFile('data.txt', insertData, (err) => {
            if (err) {
                logger.error(`Error writing to file: ${err.message}`);

                res.status(400).json({ // 400: bad request
                    message: `Error writing to file: ${err.message}`,
                });
            }
            
            logger.info('Successfully written to the file');
            res.json({
                message: 'Added request successfully',
                data: insertParams,
            });
        });

    });

});
//-------------------------------------------------------------------------

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}\n`);
});
