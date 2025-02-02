const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db.config')
const dotenv= require('dotenv').config();
const cors = require('cors');
const router = require('./routes/route');
const port = process.env.PORT 
const  host = process.env.HOST

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/api/user',router)

app.listen(port , host ,()=>{
    console.log(`server is running on ${host}:${port}`)
})