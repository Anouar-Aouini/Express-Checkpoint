const express = require('express');
const path = require('path');

const homeRoute = express.Router();

homeRoute.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
});

module.exports = homeRoute;