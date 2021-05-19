const express = require('express');
const path = require('path');

const contactRoute = express.Router();

contactRoute.use('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'contact.html'))
});
module.exports = contactRoute;