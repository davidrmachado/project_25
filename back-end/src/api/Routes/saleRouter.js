const { Router } = require('express');
const { 
    saleController,
     sellersController,
      salesProductsController,
      salesProductsIdController } = require('../controller/salesController');
const validationToken = require('../middlewares/tokenValidation');

const sale = Router();

sale.post('/', validationToken, saleController);
sale.get('/sellers', sellersController);
sale.get('/:id', salesProductsIdController);
sale.get('/', salesProductsController);

module.exports = sale;