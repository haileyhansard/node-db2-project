const express = require('express');

const carsRouter = require('../cars/cars-router');

const db = require('../data/db-config');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API is up and running for DB2 Project: Cars!' });
});

module.exports = server;