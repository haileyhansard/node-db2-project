
exports.up = function(knex) {
    return knex.schema.createTable('cars3', tbl => {
        tbl.increments('id');
        tbl.string('VIN', 256).notNullable().unique();
        tbl.string('make', 256).notNullable();
        tbl.string('model', 256).notNullable();
        tbl.decimal('mileage2', 256).notNullable();
        tbl.string('transmission2', 256);
        tbl.string('status of title2', 256);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars3');
};
