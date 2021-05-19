const express = require('express');
const path = require('path');

const servicesRoute = express.Router();

servicesRoute.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'services.html'))
});

module.exports = servicesRoute;