const serviceRegister = require('../services/registerService');

const registerController = async (req, res) => {
    const corpo = req.body;
    await serviceRegister.newUser(corpo);
    return res.status(201).json({ message: 'Created' });
};

const admController = async (req, res) => {
    const corpo = req.body;
    const { user } = req;
    await serviceRegister.admUser(corpo, user);
    return res.status(201).json({ message: 'Created' });
};

module.exports = { registerController, admController };