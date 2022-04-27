import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

import logger from './utils/logger.js';
import routes from './routes.js'; // any name can be used in default import / export

const app = express();

app.use(serveFavicon('./public/favicon.ico'));

app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(routes);

const PORT = 5000;

app.listen(PORT, () => {
    logger.info(`Listening on http://127.0.0.1:${PORT}`);
});

