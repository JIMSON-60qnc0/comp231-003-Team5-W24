const express = require('express');
const router = express.Router();
const Course = require('../models/course'); // Assuming you have a Course model

router.get('/', async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
