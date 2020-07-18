exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('status_types', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.string('name').notNullable();
        tableBuilder.enum('type', ['ACTIVE', 'INACTIVE']).notNullable().defaultTo('INACTIVE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('status_types');
};
