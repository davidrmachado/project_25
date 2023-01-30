const { Router } = require('express');
const { registerController, admController } = require('../controller/registerController');
const validationToken = require('../middlewares/tokenValidation');

const register = Router();

register.post('/', registerController);
register.post('/adm', validationToken, admController);

module.exports = register;