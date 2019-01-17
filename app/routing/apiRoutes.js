// Package requirements
const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('./../data/friends.js');

function compareUsers(arr1, arr2) {
    let diff = 0;
    for (let i = 0; i < arr1.length; i++) {
        diff += Math.abs(arr1[i] - arr2[i]);
    }

    return diff;
}

function findBestMatch(user) {
    const userAnswers = user.scores;
    let minDiff = 100;
    let match;

    // for (let other of data) {
    //     let temp = compareUsers(userAnswers, other.scores);
    //     if (temp < minDiff) {
    //         match = other;
    //     }
    // }

    data.forEach(function(other) {
        console.log(other);
        let temp = compareUsers(userAnswers, other.scores);
        if (temp < minDiff) match = other;
    })

    return match;
}

// Set Routes
router.get('/api/friends', (req, res) => {
    return res.json(data);
})

router.post('/api/friends', (req, res) => {
    // handles incoming survey results
    // handles compatibility logic
    let newUser = req.body;
    res.json(findBestMatch(newUser));
    data.push(newUser);
    res.end();
})

module.exports = router;