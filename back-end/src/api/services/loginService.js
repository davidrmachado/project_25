const { User } = require('../../database/models');
const { generateToken } = require('../../utils/jwt');
const hash = require('../../utils/hash');

const login = async (obj) => {
    const throwError = { status: 404, message: 'Not Found' };
    const senha = hash(obj.password);
    const response = await User.findOne({ where: { email: obj.email, password: senha } });
    console.log(response);
    if (!response) throw throwError;
    const { password, ...newObj } = response.dataValues;
    return { ...newObj, token: generateToken(newObj) };
};

module.exports = { login };
