
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('associate_groups', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.string('name').notNullable();
        tableBuilder.decimal('discount_value').notNullable().defaultTo(0.00);
        tableBuilder.enum('discount_type', ['PERCENT', 'FIXED']).notNullable().defaultTo('PERCENT');
    });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('associate_groups');
};
