const errorHandle = {
    404: {
        status: 404,
        message: 'Not FOund',
    },
    409: {
        status: 409,
        message: 'Conflict',
    },
    401: { status: 401, message: 'Expired or invalid token' },
};

module.exports = errorHandle;