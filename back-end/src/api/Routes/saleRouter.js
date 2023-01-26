const { Router } = require('express');
const { saleController, sellersController } = require('../controller/salesController');
const validationToken = require('../middlewares/tokenValidation');

const sale = Router();

sale.post('/', validationToken, saleController);
sale.get('/sellers', sellersController);

module.exports = sale;