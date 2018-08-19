const mongoose = require('mongoose');
const {Schema} = mongoose;




const taskSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    ownerId:{
        type: Number,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    referralCost: {
        type: Number,
        number: true
    }

});

module.exports = mongoose.model('tasks', taskSchema);