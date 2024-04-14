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