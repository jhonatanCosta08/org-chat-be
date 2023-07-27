const Sequelize = require('sequelize');
const connection = require('../database/database');

const positionModel = connection.define('position', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// positionModel.sync({force: true}).then(r => {
//     console.log('position model has sync successfully', r)
// }).catch(err => {
//     console.error('Error when tried sync the position model', err);
// });

module.exports = positionModel;