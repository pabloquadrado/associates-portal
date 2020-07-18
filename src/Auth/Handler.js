const database = require('../Database/Connection');

const AuthHandler = {
    login: async function (request, response) {
        const { code, password, operator } = request.body;

        var user;

        if (operator) {
            user = await database('operators').where('code', code);
        } else {
            user = await database('associates')
                .select('associates.*')
                .join('status', 'status.id', 'associates.status_id')
                .join('status_types', 'status_types.id', 'status.status_type_id')
                .where({
                    'associates.registration_code': code,
                    'status_types.type': 'ACTIVE'
                })
                .first();
        }

        if (! user) {
            return response.status(406).json({
                'type': 'error',
                'code': 3,
                'message': 'User not found.'
            });
        }

        return response.json(user);
    }
};

module.exports = AuthHandler;
