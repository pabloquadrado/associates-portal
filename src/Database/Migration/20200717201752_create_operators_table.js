
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('operators', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('group_id').unsigned().notNullable();
        tableBuilder.string('name').notNullable();
        tableBuilder.string('code').notNullable().comment('Matrícula do operador');
        tableBuilder.string('email').notNullable();
        tableBuilder.string('password').notNullable();
        tableBuilder.timestamps();

        tableBuilder.foreign('group_id').references('id').inTable('operator_groups');
    });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('operators');
};
