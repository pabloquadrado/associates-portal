exports.seed = function (knex) {
    return knex('operator_groups').del()
        .then(function () {
            return knex('operator_groups').insert([
                {id: 1, name: 'Ajudante', admin: false},
                {id: 2, name: 'Administrador', admin: true}
            ]);
        });
};
