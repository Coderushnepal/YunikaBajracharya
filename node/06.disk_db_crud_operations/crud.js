import diskDb from 'diskdb';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import winston, { loggers } from 'winston';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

const app = express();

app.use(serveFavicon('public/favicon.ico'));

const logger = winston.createLogger({
    level: 'info',
});

logger.add(
    new winston.transports.Console({
        format: winston.format.simple(),
    })
);

app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.json());

// connecting to DB
const db = diskDb.connect('db', ['stocks']);

//------------------CREATE---------------------------------------
app.post('/stocks', (req, res, next) => {
    logger.debug('Payload received', req.body);

    const existingData = db.stocks.findOne(req.body);

    if (existingData) {
        logger.error('Data with same payload already exists');

        res.status(400).json({
            message: 'Data with same payload already exists',
        });

        return;
    }

    // Write to Collection
    const data = db.stocks.save(req.body);

    res.json({
        data,
        message: 'Added record successfully',
    })
});

//-----------------------READ ALL-------------------------------------
app.get('/', (req, res, next) => {
    logger.info('Fetching all stocks');

    const data = db.stocks.find();

    res.json({
        message: 'List of stocks',
        data,
    });
});

//--------------------------READ UNIQUE------------------------------------
app.get('/stocks/:id', (req, res, next) => {
    const stockId = req.params.id;

    const stock = db.stocks.findOne({_id: stockId});

    if(!stock) {
        logger.error(`Couldn't find stock with id: ${stockId}`);

        res.status(404).json({
            message: `Couldn't find stock with id: ${stockId}`,
        });

        return;
    }

    res.json({
        message: `Details of stockId ${stockId}`,
        data: stock,
    });
});

//----------------------UPDATE---------------------------------------------
app.put('/stocks/:id', (req, res, next) => {
    const stockId = req.params.id;

    const stock = db.stocks.findOne({_id: stockId});

    if (!stock) {
        logger.error(`Couldn't find stock with id: ${stockId}`);

        res.status(404).json({
            message: `Couldn't find stock with id: ${stockId}`,
        });

        return;
    }

    db.stocks.update({_id: stockId}, req.body);

    const updatedData = db.stocks.findOne({_id: stockId});

    res.json({
        message: 'Record updated successfully',
        data: updatedData,
    });
});

//------------------------DELETE--------------------------------------------
app.delete('/stocks/:id', (req, res, next) => {
    const stockId = req.params.id;

    const stock = db.stocks.findOne({_id: stockId});

    if (!stock) {
        logger.error(`Couldn't find stock with id: ${stockId}`);

        res.status(404).json({
            message: `Couldn't find stock with id: ${stockId}`,
        });

        return;       
    }

    // remove collection
    db.stocks.remove({_id: stockId});

    res.json({
        message: 'Removed data successfully.',
    });
});

//--------------------------------------------------------------------------
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`);
});

