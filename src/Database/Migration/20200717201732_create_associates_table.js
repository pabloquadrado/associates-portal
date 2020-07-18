
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('associates', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('status_id').unsigned().notNullable();
        tableBuilder.integer('group_id').unsigned().notNullable();
        tableBuilder.string('name').notNullable();
        tableBuilder.string('registration_code').notNullable().comment('Matricula do associado');
        tableBuilder.string('email').notNullable();
        tableBuilder.string('password').notNullable();
        tableBuilder.string('cpf').notNullable();
        tableBuilder.string('rg').notNullable();
        tableBuilder.string('marital_status').nullable();
        tableBuilder.string('affiliation').nullable();
        tableBuilder.timestamps();

        tableBuilder.foreign('status_id').references('id').inTable('status');
        tableBuilder.foreign('group_id').references('id').inTable('associate_groups');
    });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('associates');
};
