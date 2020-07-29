const bcrypt = require('bcrypt');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('associates').del()
        .then(function () {
            // Inserts seed entries
            return knex('associates').insert([
                {
                    id: 1,
                    status_id: 1,
                    group_id: 1,
                    name: 'Associado Em dia/Ativo',
                    registration_code: '1234',
                    email: 'ativo@teste.com.br',
                    password: bcrypt.hashSync('1234', 10),
                    cpf: '12345678910',
                    rg: '1234567895',
                    marital_status: 'Solteiro',
                    affiliation: 'Piquete do Fulano'
                },
                {
                    id: 2,
                    status_id: 2,
                    group_id: 1,
                    name: 'Associado Inadimplente',
                    registration_code: '4321',
                    email: 'inativo@teste.com.br',
                    password: bcrypt.hashSync('1234', 10),
                    cpf: '12345678901',
                    rg: '1234567896',
                    marital_status: 'Solteiro',
                    affiliation: 'Piquete do Beutrano'
                },
            ]);
        });
};
