
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('vin', 128).notNullable().unique();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.decimal('mileage').notNullable().defaultTo(0);
      tbl.string('transmission_type', 128);
      tbl.string('title_status', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
