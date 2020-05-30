const AuthHandler = {
    login: async function (request, response) {
        return response.json({
            'type': 'success',
            'message': 'Logged'
        });
    }
};

module.exports = AuthHandler;
