const { verifyToken } = require('../../utils/jwt');

const validationToken = (req, res, next) => {
    const { authorization } = req.headers;
    /* if (!authorization || authorization === '') {
        const throwError = { status: 401, message: 'Token not found' };
        throw throwError;
    } */
    const data = verifyToken(authorization);
    req.user = data;
    next();
};

module.exports = validationToken;