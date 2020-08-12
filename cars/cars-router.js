const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

//set up API calls to /api/cars
// GET, GET:id, POST, PUT, DELETE

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json({ data: cars })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error.message });
        });
});

router.get('/:id', (req, res) => {
    db('cars')
    .where({ id: req.params.id })
        .then(car => {
            res.status(200).json({ data: car });
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        });
});

router.post('/', (req, res) => {
    const carInfo = req.body;
    db('cars')
    .insert(carInfo)
    .returning('id')
        .then(ids => {
            res.status(201).json({ insert: ids })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const carId = req.params.id;

    db('cars')
        .where({ id: carId })
        .update(changes)
        .then(count => {
            if(count) {
                res.status(200).json({ message: "Car information updated successfully - hooray! "});
            } else {
                res.status(404).json({ message: "Car information failed to update - please try again." })
            }
        })
        .catch(error => {
            res.status(500).json({error: error.message });
        });
});

router.delete('/:id', (req, res) => {
    const carId = req.params.id;

    db('cars')
        .where({ id: carId })
        .del()
        .then(count => {
            if(count) {
                res.status(200).json({ message: "Car info removed successfully." });
            } else {
                res.status(404).json({ message: "Car attempted to target was not found." });
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        });
});

module.exports = router;