const database = require('../Database/Connection');

const AuthHandler = {
    login: async function (request, response) {
        const tests = await database('test').select('*');

        return response.json(tests);
    }
};

module.exports = AuthHandler;
