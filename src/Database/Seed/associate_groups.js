
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('associate_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('associate_groups').insert([
        {id: 1, name: 'Grupo Padrão'}
      ]);
    });
};
