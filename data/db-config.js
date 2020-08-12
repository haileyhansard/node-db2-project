const knex = require('knex');

const knexfile = require('../knexfile');

//const database = 'development';

const dbConfig = knexfile.development

module.exports = knex(dbConfig);