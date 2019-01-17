// Package requirements
const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('./../data/friends.js');

// Set Routes
router.get('/api/friends', (req, res) => {
    return res.json(data);
})

router.post('/api/friends', (req, res) => {
    // handles incoming survey results
    // handles compatibility logic
    
})

module.exports = router;