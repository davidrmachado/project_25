const express = require('express');
const { Product } = require('../database/models');

const app = express();

app.get('/products', async (_req, res) => {
    const result = await Product.findAll();
    return res.status(200).json(result);
});

module.exports = app;
