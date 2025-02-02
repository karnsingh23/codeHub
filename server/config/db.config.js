const mongoose = require('mongoose');
const dotenv= require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL
const connectDB = ()=>{
    mongoose.connect(`${MONGODB_URL}`)
    .then(()=>{console.log("connected to mongoDB");
    })
    .catch((err)=>{console.log(err);
    })
}

module.exports = connectDB