const Sequelize = require('sequelize');
const connection = require('../database/database');
const positionModel = require('../positions/positions.model');

const personModel = connection.define('people', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

positionModel.hasMany(personModel);
personModel.belongsTo(positionModel);

// personModel.sync({force: true}).then(r => {
//     console.log('Person model has sync successfully', r)
// }).catch(err => {
//     console.error('Error when tried sync the person model', err);
// });

module.exports = personModel;