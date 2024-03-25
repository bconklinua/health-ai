// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow only the frontend origin
}));

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
