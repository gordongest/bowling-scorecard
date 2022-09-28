require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const start = (async () => {
    await mongoose.connect('mongodb://localhost/bowling-scorecard')
            .then(() => console.log('Connection open for bowling_scorecard...'))
})();

app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
    res.status(422).send({ err: err.message })
});

routes(app);

module.exports = app;