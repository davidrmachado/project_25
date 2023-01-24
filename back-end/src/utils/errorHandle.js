const errorHandle = {
    404: {
        status: 404,
        message: 'Not Found',
    },
    409: {
        status: 409,
        message: 'Conflict',
    },
};

module.exports = errorHandle;