const express = require('express');
require('dotenv').config();

const UserRoutes = require('./routes/user.route')

const app = express();

app.use('/users', UserRoutes)

app.get('/', (req, res) => {
    res.send('');
});

module.exports = app;
