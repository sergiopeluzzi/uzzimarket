const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser')

const UserRoutes = require('./routes/user.route')

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/users', UserRoutes)

app.get('/', (req, res) => {
    res.send('');
});

module.exports = app;
