
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('status_types').insert([
        {id: 1, name: 'Ativo', type: 'ACTIVE'},
        {id: 2, name: 'Inativo', type: 'INACTIVE'},
      ]);
    });
};
