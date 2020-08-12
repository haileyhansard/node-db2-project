
exports.seed = function(knex, Promise) {
  return knex('cars').truncate() //truncate will reset our IDs because we want a fresh start every time we run our seeds, this line will get rid of all entries in cars database and reset primary keys
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'YS3DF78K527013330', make: 'Saab', model: '9-3X', mileage: 5000, transmission: 'automatic', status_of_title: 'clean' },
        { VIN: 'JH4KA7670RC000738', make: 'Acura', model: 'Legend', mileage: 10000, transmission: 'automatic', status_of_title: 'clean' },
        { VIN: '1HGCG5659WA086602', make: 'Honda', model: 'Accord', mileage: 15000, transmission: 'automatic', status_of_title: 'clean' }
      ]);
    });
};
