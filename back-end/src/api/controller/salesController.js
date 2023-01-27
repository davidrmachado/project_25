const { 
    createSale, 
    sellers, 
    salesProdutcts, 
    salesProdutctsId, 
    allSales } = require('../services/salesService');

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

const salesProductsController = async (req, res) => {
    const response = await salesProdutcts();
    return res.status(200).json(response);
};

const salesProductsIdController = async (req, res) => {
    const { id } = req.params;
    const response = await salesProdutctsId(id);
    return res.status(200).json(response);
};

const allSalesController = async (req, res) => {
    const response = await allSales();
    return res.status(200).json(response);
};

module.exports = { 
    saleController, 
    sellersController,
     salesProductsController,
    salesProductsIdController,
    allSalesController };