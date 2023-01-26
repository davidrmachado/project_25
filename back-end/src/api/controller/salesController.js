const { createSale, sellers } = require('../services/salesService');

const saleController = async (req, res) => {
    const arrayProducts = req.body;
    const usuario = req.user;
    console.log(arrayProducts, usuario);
    const result = await createSale(arrayProducts, usuario);
return res.status(201).json({ message: result });
};

const sellersController = async (req, res) => {
    const response = await sellers();
    return res.status(200).json(response);
};

module.exports = { saleController, sellersController };