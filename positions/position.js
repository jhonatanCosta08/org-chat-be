const express = require('express');
const router = express.Router();
const personModel = require('../persons/person.model');
const positionModel = require('./positions.model');
const crypto = require('crypto');

router.get('/positions',  (req, res) => {
    positionModel.findAll({
        include: { model: personModel},
        order: [['createdAt', 'DESC']]
    }).then((response) => {
        if(response) {
            res.json(response);
        }else {
            res.status(500).json({ message: 'Server error' });
        }
    }).catch(err => console.error('Error in create categoy', err));;
});

router.get('/positions/:id',  (req, res) => {
    const id = req.params.id;
    positionModel.findByPk(id, {
        include: { model: personModel },
    }).then((response) => {
        if(response) {
            res.json(response);
        }else {
            res.status(500).json({ message: 'Server error' });
        }
    }).catch(err => console.error('Error in create categoy', err));
});

router.post('/positions',  (req, res) => {
    const position = req.body.position;
    positionModel.create({
        id: crypto.randomUUID(),
        position: position,
    }).then((response) => {
        if(response) {
            res.json(response);
        }else {
            res.status(500).json({ message: 'Server error' });
        }
    }).catch(err => console.error('Error in create categoy', err));
});

module.exports = router;