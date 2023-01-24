const { Router } = require('express');
const { cardsController } = require('../controller/cardsController');

const cards = Router();

cards.get('/products', cardsController);

module.exports = cards;