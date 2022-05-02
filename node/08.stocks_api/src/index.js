import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

import router from './routes.js'; // any name can be used in default import / export
import logger from './utils/logger.js';

const app = express();

dotenv.config();

app.use(serveFavicon('./public/favicon.ico'));

app.use(helmet());
/*
const helmet() = () => (req, res, next) => { }
const controller = (req, res, next) => { }
*/
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(router);

app.listen(process.env.PORT, () => {
  logger.info(`Listening on http://127.0.0.1:${process.env.PORT}`);
});
