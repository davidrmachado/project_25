const express = require('express');
 require('express-async-errors');
const login = require('./Routes/LoginRouter');
const register = require('./Routes/registerRouter');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/register', register);

app.use((err, req, res, _next) => res.status(err.status).json({ message: err.message }));

module.exports = app;
