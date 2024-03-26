// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from Express backend!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
