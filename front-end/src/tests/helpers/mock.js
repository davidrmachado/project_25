const ENDPOINTS = {
    LOGIN: '/login',
}

const MOCK_DATA = {
    LOGIN = {
        
    }
}

return global.fetch = jest.fn(async (endpoint) => {
    json: async () => {
        if (endpoint === ENDPOINTS.LOGIN) {
            return MOCK_DATA.LOGIN;
        }
    }
});