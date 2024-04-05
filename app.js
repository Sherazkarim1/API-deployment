const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API server');
});

// POST endpoint for server status
app.post('/api/status', (req, res) => {
  res.json({ message: 'Server is up and running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
