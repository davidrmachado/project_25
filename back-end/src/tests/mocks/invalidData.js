const INVALID_DATA = {
    LOGIN: { email: 'qualquer@gmail.com', password: '12345678' },
    REGISTER: {
        dataValues: {
            id: 3,
            name: 'Cliente Zé Birita',
            email: '$#zebirita#$',
            password: '1c37466c159755ce1fa181bd247cb925',
            role: 'customer'
        }
    },
}

module.exports = INVALID_DATA;