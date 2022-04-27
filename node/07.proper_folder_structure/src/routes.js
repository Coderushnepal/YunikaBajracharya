import { Router } from 'express';
import * as stockController from './controllers/stock.js';

const router = Router();

router.post('/stocks', stockController.addStock);

router.get('/stocks', stockController.getStocks);

router.get('/stocks/:id', stockController.getStock);

router.put('/stocks/:id', stockController.updateStock);

router.delete('/stocks/:id', stockController.removeStock);

export default router;