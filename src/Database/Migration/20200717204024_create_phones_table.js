
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('phones', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('associate_id').unsigned().nullable().defaultTo(null);
        tableBuilder.integer('operator_id').unsigned().nullable().defaultTo(null);
        tableBuilder.string('phone').notNullable();

        tableBuilder.foreign('associate_id').references('id').inTable('associates');
        tableBuilder.foreign('operator_id').references('id').inTable('operators');
    });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('phones');
};
