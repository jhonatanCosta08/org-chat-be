const express = require('express');
const router = express.Router();
const personModel = require('./person.model');
const positionModel = require('../positions/positions.model');
const crypto = require('crypto');


router.post('/person', (req, res) => {
    const {name, email, phone, city, photo, positionId} = req.body;
    if(req.body){
        personModel.create({
            id: crypto.randomUUID(),
            name: name,
            email: email,
            phone: phone,
            city: city,
            photo: photo,
            positionId: positionId
        }).then((response) => {
            if(response) {
                res.json(response);
            }else {
                res.status(500).json({ message: 'Server error' });
            }
        }).catch(err => console.error('Error in create categoy', err));
    }
});

router.get('/person/:id',  (req, res) => {
    const id = req.params.id;
    personModel.findByPk(id, {
        include: { model: positionModel },
    }).then((response) => {
        if(response) {
            res.json(response);
        }else {
            res.status(500).json({ message: 'Server error' });
        }
    }).catch(err => console.error('Error in create categoy', err));
});

router.get('/person',  (req, res) => {
    personModel.findAll({
        include: { model: positionModel},
        order: [['createdAt', 'DESC']]
    }).then((response) => {
        if(response) {
            res.json(response);
        }else {
            res.status(500).json({ message: 'Server error' });
        }
    }).catch(err => console.error('Error in create categoy', err));
});

module.exports = router;