import { query } from 'express';
import * as stockService from '../services/stock.js';

export function addStock(req, res, next) {

    try {
        const data = stockService.addStock(req.body);
        
        res.json(data);
    } 
    catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
} 

export function getStocks(req, res, next) {
    try {
        const data = stockService.getAllStocks(req.query);
        
        res.json(data);
    } 
    catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
} 

export function getStock(req, res, next) {
    const id = req.params.id;

    try {
        const data = stockService.getStock(id);
        
        res.json(data);
    } 
    catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
} 

export function updateStock(req, res, next) {
    const id = req.params.id;

    try {
        const data = stockService.updateStock(id, req.body);
        
        res.json(data);
    } 
    catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
} 

export function removeStock(req, res, next) {
    const id = req.params.id;

    try {
        const data = stockService.deleteStock(id);
        
        res.json(data);
    } 
    catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
} 

