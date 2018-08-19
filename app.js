const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const nCentSDK = require('./source/index.js');
const nCent = new nCentSDK('ajsdlf');
const address = nCent.createWalletAddress();
const address2 = nCent.createWalletAddress();
const tasks = require('./routes/tasksRoutes.js');

const app = express();

const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
app.use('/tasks', tasks);



app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res) => res.status(200).send({address, address2}));


module.exports = app;
