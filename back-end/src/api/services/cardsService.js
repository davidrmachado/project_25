const models = require('../index');

const allCards = async () => {
  const cards = await models.Product.findAll();
  return cards;
};

module.exports = { allCards };
