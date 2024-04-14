// Only export Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
