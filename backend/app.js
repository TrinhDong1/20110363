const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const planetsRouter = require('./src/routes/planets/planets.router');
const launchesRouter = require('./src/routes/launches/launches.router');

if(process.env.NODE_ENV !=='PRODUCTION') require("dotenv").config({path: 'backend/config/config.env'})
const app = express();

app.use(cors());
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
})

module.exports = app;