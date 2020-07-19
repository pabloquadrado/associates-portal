
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {id: 1, status_type_id: 1, name: 'Em dia'},
        {id: 2, status_type_id: 2, name: 'Inadimplente'}
      ]);
    });
};
