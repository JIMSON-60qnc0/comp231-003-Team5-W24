// server/app.js
const express = require('express');
const cors = require('cors');
const db = require('./config/database'); // Your database connection
const authRoutes = require('./routes/auth');
const mysql = require('mysql2/promise');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import your routes
// ... import other routes

const app = express();
const coursesRoutes = require('./routes/courses');
const quizzesRoutes = require('./routes/quizzes');
const corsOptions = {
    origin: '*', // Replace with the origin of your frontend
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '12345',
    database: 'project' 
  });

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to database', err)); 


app.use(cors(corsOptions));  // Configure your CORS settings as needed
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/courses', coursesRoutes); 
app.use('/api/quizzes', quizzesRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' }); 
  });


// Routes
app.post('/registration', async (req, res) => {
    console.log('Registration request received:', req.body);
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, hashedPassword, role], (err, result) => {
            if (err) {
                // Handle duplicate email error specifically
                if (err.code === 'ER_DUP_ENTRY') {
                  return res.status(409).json({ error: "Email already exists" }); 
                } else {
                  console.error('Failed to insert user:', err);
                  return res.status(500).json({ error: "Database error" });
                }
              } else {
                return res.status(201).json({ message: "User registered successfully" });
              }
            });
    } catch (err) {
        console.error('Registration error:', err);
        return res.status(500).json({ error: "Server error during registration" });
    }
});


app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const [user] = await db.promise().query(sql, [email]);
        if (user.length > 0 && await bcrypt.compare(password, user[0].password)) {
            const token = jwt.sign({ id: user[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.status(200).json({ token, details: user[0] });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (err) {
        res.status(500).send('Database error');
    }
});

app.listen(3001, () => console.log('Server listening on port 3001'));


