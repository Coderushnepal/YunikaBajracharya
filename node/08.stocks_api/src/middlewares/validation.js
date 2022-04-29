import Joi from 'joi';
import addStockSchema from '../schemas/addStock.js';

function validation (req, res, next) {
    try {
        Joi.assert(req.body, addStockSchema);

        next();
    } catch (err) {
        res.status(400).json({
            message: 'Validation error',
            details: err.details.map((e) => e.message),
        })
    }
}

export default validation;