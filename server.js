// Package requirements
const express = require('express');
const path = require('path');

// Routes
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

// Setting up Express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Data parsing for Express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', apiRoutes)
app.use('/', htmlRoutes);

// Start the server
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});