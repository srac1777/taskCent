const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const nCentSDK = require('ncent-sdk-public');


const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome',
}))

module.exports = app;
