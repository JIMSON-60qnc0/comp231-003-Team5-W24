const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const session = requier('express-session');
const mysql=require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'mydatabase'
});

// Middleware
app.use(cors());
app.use(express.json()); // If using Express 4.16+

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
