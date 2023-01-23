const { newUser } = require('../services/registerService');

const registerController = async (req, res) => {
    const corpo = req.body;
 await newUser(corpo);
return res.status(201).json({ message: 'Created' });
};

module.exports = { registerController };