// routes/users.js
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db'); // Adjust the path as necessary
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await pool.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
            [username, hashedPassword, email]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
