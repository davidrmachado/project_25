const { Op } = require('sequelize');
const { User } = require('../../database/models');
const hash = require('../../utils/hash');

const newUser = async (obj) => {
    const throwError = { status: 409, message: 'Conflict' };
    const senha = hash(obj.password);
    const response = await User
    .findOne({ where: { [Op.or]: [{ email: obj.email }, { name: obj.name }] } });
    if (response) throw throwError;
     await User.create({ ...obj, password: senha, role: 'customer' });
     return 'Created';
};

module.exports = { newUser };
