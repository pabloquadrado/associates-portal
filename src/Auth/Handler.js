const database = require('../Database/Connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthHandler = {
    login: async function (request, response) {
        const {code, password, operator} = request.body;

        const user = await AuthHandler.getUserByCode(code, operator);

        if (!user) {
            return response.status(406).json({
                type: 'error',
                code: 3,
                message: 'User not found.'
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return response.status(406).json({
                type: 'error',
                code: 4,
                message: 'Invalid password.'
            });
        }

        return response.json({
            type: 'success',
            user: user,
            token: jwt.sign({id: user.id}, process.env.AUTH_SECRET),
        });
    },

    getUserByCode: async function (code, searchByOperator) {
        if (searchByOperator) {
            return database('operators')
                .select('operators.*','operator_groups.admin')
                .join('operator_groups', 'operator_groups.id', 'operators.group_id')
                .where('code', code)
                .first();
        }

        return database('associates')
            .select('associates.*')
            .join('status', 'status.id', 'associates.status_id')
            .join('status_types', 'status_types.id', 'status.status_type_id')
            .where({
                'associates.registration_code': code,
                'status_types.type': 'ACTIVE'
            })
            .first();
    }
};

module.exports = AuthHandler;
