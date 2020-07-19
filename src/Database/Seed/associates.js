
exports.seed = function(knex) {
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
            email: ''
        },
      ]);
    });
};
