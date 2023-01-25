const { Router } = require('express');
const { saleController } = require('../controller/salesController');
const validationToken = require('../middlewares/tokenValidation');

const sale = Router();

sale.post('/', validationToken, saleController);

module.exports = sale;