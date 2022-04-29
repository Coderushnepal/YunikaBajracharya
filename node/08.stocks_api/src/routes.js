import { Router } from 'express';
import validation from './middlewares/validation.js';
import * as stockController from './controllers/stock.js';

const router = Router();

router.post('/stocks', validation, stockController.addStock);

router.get('/stocks', stockController.getStocks);

router.get('/stocks/:id', stockController.getStock);

router.put('/stocks/:id', validation,   stockController.updateStock);

router.delete('/stocks/:id', stockController.removeStock);

export default router;