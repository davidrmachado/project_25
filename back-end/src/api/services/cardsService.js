const { Product } = require('../../database/models');

const allCards = async () => {
  const cards = await Product.findAll();
  return cards;
};

module.exports = { allCards };
