const express = require('express');
// require('express-async-errors');
const { Product } = require('../database/models');
const login = require('./Routes/LoginRouter');

const app = express();

app.use(express.json());

app.use('/login', login);

app.get('/products', async (_req, res) => {
    const result = await Product.findAll();
    return res.status(200).json(result);
});

app.use((err, req, res, _next) => res.status(err.status).json({ message: err.message }));

module.exports = app;
