const cardsService = require('../services/cardsService');

const cardsController = async (_req, res) => {
  const result = await cardsService.allCards();
  return res.status(200).json(result);
};

module.exports = { cardsController };