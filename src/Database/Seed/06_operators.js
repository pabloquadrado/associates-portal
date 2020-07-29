const bcrypt = require('bcrypt');

exports.seed = function (knex) {
    return knex('operators').del()
        .then(function () {
            return knex('operators').insert([
                {
                    id: 1,
                    group_id: 1,
                    name: 'Operador Ajudante',
                    code: 1234,
                    email: 'operador@ajudante.com',
                    password: bcrypt.hashSync('1234', 10)
                },
                {
                    id: 2,
                    group_id: 2,
                    name: 'Operador Administrador',
                    code: 4321,
                    email: 'operador@adm.com',
                    password: bcrypt.hashSync('1234', 10)
                },
            ]);
        });
};
