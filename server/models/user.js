// server/models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
    // Define attributes
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('student', 'instructor'),
        defaultValue: 'student'
    },
    points: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    // Model options
});

module.exports = User;

