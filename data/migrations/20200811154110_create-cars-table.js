
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 256).notNullable().unique();
      tbl.string('make', 256).notNullable();
      tbl.string('model', 256).notNullable();
      tbl.decimal('mileage', 256).notNullable();
      tbl.string('transmission', 256);
      tbl.string('status of title', 256);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};
