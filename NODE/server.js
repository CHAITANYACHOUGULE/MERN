// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the registration form HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
    // Extract the form data
    const formData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirm_password,
        gender: req.body.gender,
    };

    // Save form data to a JSON file
    const dataToSave = JSON.stringify(formData, null, 2);
    fs.writeFileSync('registration-data.json', dataToSave, 'utf8');

    // Send a response to the user
    res.send('Registration successful! Your data has been saved.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
