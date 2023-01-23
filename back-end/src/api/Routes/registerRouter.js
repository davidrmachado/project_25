const { Router } = require('express');
const { registerController } = require('../controller/registerController');

const register = Router();

register.post('/', registerController);

module.exports = register;