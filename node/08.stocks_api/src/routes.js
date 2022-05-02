import { Router } from 'express';
import addStockSchema from './schemas/addStock.js';
import * as apiController from './controllers/api.js';
import * as stockController from './controllers/stock.js';
import getStocksQuerySchema from './schemas/getStocksQuery.js';
import { validateBody, validateQueryParams } from './middlewares/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.post('/stocks', validateBody(addStockSchema), stockController.addStock);

router.get('/stocks', validateQueryParams(getStocksQuerySchema), stockController.getStocks);

router.get('/stocks/:id', stockController.getStock);

router.put('/stocks/:id', validateBody(addStockSchema), stockController.updateStock);

router.delete('/stocks/:id', stockController.removeStock);

export default router;
