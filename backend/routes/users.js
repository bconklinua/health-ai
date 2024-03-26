// routes/users.js
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');
const router = express.Router();

// Utility function for basic email validation
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Registration route
router.post('/register', async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    // Basic validation
    if (!username || !password || !email || !first_name || !last_name) {
        return res.status(400).send('All fields are required');
    }

    if (!validateEmail(email)) {
        return res.status(400).send('Invalid email format');
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await pool.query(
            'INSERT INTO users (username, password, email, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, hashedPassword, email, first_name, last_name]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Retrieve user from the database
        const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (userResult.rows.length > 0) {
            const user = userResult.rows[0];

            // Compare submitted password with the stored hashed password
            const isValid = await bcrypt.compare(password, user.password);

            if (isValid) {
                // Passwords match - authenticate the user
                // For simplicity, we're just sending a success message
                // In a real application, you might issue a token or set a cookie here
                res.json({ message: "Logged in successfully!" });
            } else {
                // Passwords do not match
                res.status(400).json({ error: "Invalid credentials" });
            }
        } else {
            // No user found with the provided username
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
