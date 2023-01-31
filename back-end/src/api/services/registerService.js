const { Op } = require('sequelize');
const { User } = require('../../database/models');
const hash = require('../../utils/hash');

const throwError = { status: 409, message: 'Conflict' };
const newUser = async (obj) => {
    const senha = hash(obj.password);
    const response = await User
        .findOne({ where: { [Op.or]: [{ email: obj.email }, { name: obj.name }] } });
    if (response) throw throwError;
  await User.create({ ...obj, password: senha, role: 'customer' });
     return 'Created';
};

 const admUser = async (obj, user) => {
    const errorAdm = { status: 403, message: 'User not Authorized' };
    const response = await User
    .findOne({ where: { [Op.or]: [{ email: obj.email }, { name: obj.name }] } });
    if (response) throw throwError;
    if (user.role === 'administrator') {
        const senha = hash(obj.password);
        await User.create({ ...obj, password: senha });
        return 'Created';
    }
    throw errorAdm;
}; 

module.exports = { newUser, admUser };
