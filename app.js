// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a sample middleware function
const sampleMiddleware = (req, res, next) => {
    console.log('This is a sample middleware.');
    next(); // Call next() to pass control to the next middleware function or route handler
};

// Define a route with a middleware function
app.get('/', sampleMiddleware, (req, res) => {
    res.send('Hello, this is the homepage of your API!');
});

// Define a route with parameters
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`You requested user with ID: ${userId}`);
});

// Define a route to handle POST requests
app.post('/users', (req, res) => {
    const userData = req.body;
    // Assuming userData is an object with properties like name, email, etc.
    // Process the data as needed (e.g., save it to a database)
    res.send('User data received and processed successfully.');
});

// Define a route to handle PUT requests
app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const updatedUserData = req.body;
    // Assuming updatedUserData is an object with properties to update
    // Process the data as needed (e.g., update user record in a database)
    res.send(`User with ID ${userId} updated successfully.`);
});

// Define a route to handle DELETE requests
app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Process the request to delete user with ID userId
    res.send(`User with ID ${userId} deleted successfully.`);
});

// Define a route to handle all other requests (404 Not Found)
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
