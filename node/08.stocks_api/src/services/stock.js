import Stock from '../models/Stock.js';
import logger from '../utils/logger.js';

export function addStock(params) {
  logger.info('Payload received', params);
  const existingData = new Stock().find(params);

  if (existingData) {
    logger.error('Data with same payload already exists');

    throw new Error('Data with same payload already exists');
  }

  logger.info('Adding new data to the list');
  const newData = new Stock().post(params);

  return {
    newData,
    message: 'Stock added successfully',
  };
}

export function getAllStocks(query) {
  const nameFilter = query.name ? query.name.split(',') : [];
  const quantityFilter = query.quantity ? query.quantity.split(',') : [];
  const rateFilter = query.rate ? query.rate.split(',') : [];

  logger.info('Fetching a list of stocks');
  const stocks = new Stock().getAll();

  let filteredStocks = stocks;

  if (nameFilter.length) {
    filteredStocks = stocks.filter((stock) => nameFilter.includes(stock.name));
  }

  if (quantityFilter.length) {
    filteredStocks = stocks.filter((stock) => quantityFilter.includes(stock.quantity));
  }

  if (rateFilter.length) {
    filteredStocks = stocks.filter((stock) => rateFilter.includes(stock.rate));
  }

  return {
    data: filteredStocks,
    message: 'List of stocks',
  };
}

export function getStock(id) {
  logger.info(`Fetching stock of id: ${id}`);
  const stock = new Stock().getById(id);

  if (!stock) {
    logger.error(`Couldn't find stock with id: ${id}`);

    throw new Error(`Couldn't find stock with id: ${id}`);
  }

  return {
    data: stock,
    message: `Details of stock id: ${id}`,
  };
}

export function updateStock(id, params) {
  logger.info(`Checking the existence of stock with id: ${id}`);

  const stock = new Stock().getById(id);

  if (!stock) {
    logger.error(`Couldn't find stock with id: ${id}`);

    throw new Error(`Couldn't find stock with id: ${id}`);
  }

  logger.info(`Updating the data for stock with id: ${id}`);
  new Stock().updateById(id, params);

  logger.info(`Fetching the updated data for stock with id: ${id}`);
  const updatedData = new Stock().getById(id);

  return {
    message: 'Record updated successfully',
    data: updatedData,
  };
}

export function deleteStock(id) {
  logger.info(`Checking the existence of stock with id: ${id}`);

  const stock = new Stock().getById(id);

  if (!stock) {
    logger.error(`Couldn't find stock with id: ${id}`);

    throw new Error(`Couldn't find stock with id: ${id}`);
  }

  new Stock().delete(id);

  return {
    message: 'Removed data successfully.',
  };
}
