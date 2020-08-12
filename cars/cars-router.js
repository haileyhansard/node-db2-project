// const express = require('express');

// const db = require('../data/db-config');

// const router = express.Router();

const router = require('express').Router();

const db = require('../data/db-config');

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json({ data: cars })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        });
});

module.exports = router;