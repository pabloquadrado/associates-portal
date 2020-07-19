exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('addresses', function (tableBuilder) {
        tableBuilder.increments();
        tableBuilder.integer('associate_id').unsigned().nullable().defaultTo(null);
        tableBuilder.integer('operator_id').unsigned().nullable().defaultTo(null);
        tableBuilder.string('street').notNullable();
        tableBuilder.integer('number').nullable();
        tableBuilder.string('complement').nullable();
        tableBuilder.string('district').notNullable().comment('Bairro');
        tableBuilder.string('city').notNullable();
        tableBuilder.string('state').notNullable();
        tableBuilder.string('zip_code').notNullable();

        tableBuilder.foreign('associate_id').references('id').inTable('associates');
        tableBuilder.foreign('operator_id').references('id').inTable('operators');
    });
};

exports.down = function (knex) {
    knex.schema.dropTableIfExists('addresses');
};
