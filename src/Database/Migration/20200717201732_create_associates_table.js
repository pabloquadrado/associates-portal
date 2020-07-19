exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('associates', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('status_id').unsigned().notNullable();
        tableBuilder.integer('group_id').unsigned().notNullable();
        tableBuilder.string('name').notNullable();
        tableBuilder.string('registration_code').notNullable().unique().comment('Matricula do associado');
        tableBuilder.string('email').unique().notNullable();
        tableBuilder.string('password').notNullable();
        tableBuilder.string('cpf').unique().notNullable();
        tableBuilder.string('rg').unique().notNullable();
        tableBuilder.string('marital_status').nullable();
        tableBuilder.string('affiliation').nullable();
        tableBuilder.timestamps();

        tableBuilder.foreign('status_id').references('id').inTable('status');
        tableBuilder.foreign('group_id').references('id').inTable('associate_groups');
    });
};

exports.down = function (knex) {
    knex.schema.dropTableIfExists('associates');
};
