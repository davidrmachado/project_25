const { allCards } = require('../services/cardsService');

const cardsController = async (_req, res) => {
  const result = await allCards();
  return res.status(200).json(result);
};

module.exports = { cardsController };