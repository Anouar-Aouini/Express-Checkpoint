const express = require('express');
const path = require('path');

const workingTimeRoute = express.Router();

workingTimeRoute.get('/*',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'workingTime.html'))
});

module.exports = workingTimeRoute;