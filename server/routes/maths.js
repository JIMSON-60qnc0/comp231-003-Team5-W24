const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get details of the Maths course
router.get('/', async (req, res) => {
    try {
        const [course] = await db.execute('SELECT * FROM courses WHERE title = ?', ['Maths']);
        if (!course.length) {
            return res.status(404).json({ error: 'Maths course not found' });
        }
        res.json(course[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch Maths course' });
    }
});

// Enroll a user in the Maths course (assuming a user ID in the request body)
router.post('/enroll', authMiddleware, async (req, res) => {
    const userId = req.user.id; // Retrieve user ID from authMiddleware
    try {
        await db.execute('INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)', [userId, 1]); 
        res.json({ message: 'Successfully enrolled in Maths course' });
    } catch (err) {
        console.error(err);
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'User already enrolled in this course' });
        } else {
            res.status(500).json({ error: 'Failed to enroll user in Maths course' });
        }
    }
});

module.exports = router;
