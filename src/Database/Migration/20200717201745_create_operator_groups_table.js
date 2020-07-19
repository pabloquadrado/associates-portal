exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('operator_groups', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.string('name').nullable();
        tableBuilder.boolean('admin').notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {
    knex.schema.dropTableIfExists('operator_groups');
};
