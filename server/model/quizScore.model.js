const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    quizTitle:{
        type: String,
        required: true
    },
    
    score:{
        type: Number,
        required: true
    }
},
{
    timestamps: true,
    versionKey:false
});

module.exports = mongoose.model("scores",scoreSchema);