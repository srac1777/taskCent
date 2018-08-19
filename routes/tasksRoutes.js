const mongoose = require('mongoose');
const Task = require('../models/tasks');
var express = require('express');
var router = express.Router();

router.post('/new', (req,res) => {
    // console.log('here is the book',res.body);

    // console.log('the request object is',req);
    // console.log(req.body);
    Task.create(req.body).then((task) => {
        console.log('the response task is',task);
        return res.status(201).send(task);
    }).catch(err => {
        return res.status(400).send({error:err});
    });
});

router.get('/all', (req,res) => {
    Task.find({}).then((tasks) => {
        res.status(201).send(tasks);
    });
});

router.get('/:id', (req,res) => {
    Task.findById({_id:req.params.id}).then((task) => {
        res.status(201).send(task);
    }).catch(err => {
        return res.status(401).send({error:err});
    });
});

router.patch('/:id', (req,res) => {
    Task.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then(()=> {
        Task.findOne({_id: req.params.id}).then(task => {
        return res.status(201).send(task);
    });
    }).catch(err => {
            return res.status(400).send({error:err});
    });

});

router.delete('/:id', (req,res) => {
     Task.findByIdAndRemove({_id:req.params.id}).then(task => {

         return res.status(201).send(task);
        });
    });

module.exports = router;