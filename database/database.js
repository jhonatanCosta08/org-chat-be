const { Sequelize } = require('sequelize');

const connection = new Sequelize('tuntsOrgChat', 'root', '5897', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;