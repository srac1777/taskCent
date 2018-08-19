const mongoose = require('mongoose');
const Task = require('../models/tasks');
var express = require('express');
var router = express.Router();

router.post('/new', (req,res) => {
    // console.log('here is the book',res.body);

    // console.log('the request object is',req);
    console.log(req.body);
    Task.create({name: 'build car', description: 'build my car', ownerId:1, cost:100, referralCost:10}).then((task) => {
        console.log('the response task is',task);
        return res.status(201).send(task);
    }).catch(err => {
        return res.status(400).send({error:err});
    });
});

module.exports = router;