// server/app.js
const express = require('express');
const cors = require('cors');
const db = require('./config/database'); // Your database connection
const authRoutes = require('./routes/auth'); // Import your routes
// ... import other routes

const app = express();
const coursesRoutes = require('./routes/courses');
const quizzesRoutes = require('./routes/quizzes');

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the origin of your frontend
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to database', err)); 


app.use(cors());  // Configure your CORS settings as needed
app.use(express.json());

app.use('/api/courses', coursesRoutes); 
app.use('/api/quizzes', quizzesRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' }); 
  });

  app.use(cors({
    origin: 'http://localhost:3000' 
}));

// Test database connection

// API routes
app.use('/api', authRoutes);
// ... add routes for courses, quizz, etc.

app.listen(3001, () => console.log('Server listening on port 3001'));
