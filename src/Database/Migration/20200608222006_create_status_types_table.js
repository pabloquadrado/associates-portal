exports.up = function(knex) {
    return knex.schema.createTable('status_types', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.string('name').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('status_types');
};
