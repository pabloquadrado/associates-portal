exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('status', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('status_type_id').unsigned().notNullable();
        tableBuilder.string('name').notNullable()

        tableBuilder.foreign('status_type_id').references('id').inTable('status_types');
    })
};

exports.down = function (knex) {
    knex.schema.dropTableIfExists('status');
};
