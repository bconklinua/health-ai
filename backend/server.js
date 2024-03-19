// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Import routes
const userRoutes = require('./routes/users');

app.use(express.json()); // Middleware to parse JSON bodies

// Use routes
app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
