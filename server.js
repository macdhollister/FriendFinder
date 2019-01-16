// Package requirements
const express = require('express');
const path = require('path');

// Setting up Express
const app = express();
const PORT = 3000;

// Set up Data parsing for Express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Start the server
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});

// User data storage




// Set routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'survey.html'));
})