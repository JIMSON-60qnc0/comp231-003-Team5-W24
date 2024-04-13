// server/routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }

    const token = authHeader.split(' ')[1]; // Assuming token format "Bearer <token>"

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded; // make user info available on the request object
        next(); 
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate user input (ensure email and password are present)

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' }); 

        res.json({ token }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
module.exports = authMiddleware;