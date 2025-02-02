const express = require('express');
const User = require('../model/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router();
const Contact = require('../model/contact.model')
const Score = require('.././model/quizScore.model')
const  checkAuth = require('../middleware/checkAuth')
const dotenv = require('dotenv').config();

router.post('/signup',async (req, res, next) => {
    try {
      const {name,  email, password } = req.body;
  
      const existingUser = await User.findOne({ email }).exec();
      if (existingUser) {
        return next(createError(409, "Email is already in use."));
      }
  
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
  
      const user = new User({
        name,
        email,
        password: hashedPassword
      });
      await user.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      return next(error);
    }
  });

  router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        const token = jwt.sign({ userId: user._id }, process.env.JWT, { expiresIn: '1year' });

        return res.status(200).json({ token, user: userWithoutPassword });
        
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});


  router.post('/contact',async (req,res)=>{
    try {
      const {name,email,message}=req.body;
    if(!name || !email || !message){
      return res.status(400).json({message:'Please fill in all fields.'})
    }
    const contact = new Contact({
      name,
      email,
      message
      })
      await contact.save();
      res.status(200).json({"message":"success"})
      
    } catch (error) {
      return next (error)
    }

  })

  router.post('/score', checkAuth,async (req, res) => {
    try {
        const { score,quizTitle } = req.body;
    
        
        
        if (!score || !quizTitle) {
            return res.status(400).json({ message: "Score is required" });
        }
        
        const userId = req.user.userId; 
        
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const newScore = new Score({ userId, quizTitle,score });
        await newScore.save();
        
        res.status(200).json({ message: "Score saved successfully" });
    } catch (error) {
        console.error("Error in /score route:", error);
        res.status(400).json({ message: "Failed to store score", error: error.message });
    }
});

  router.get('/getscore',checkAuth,async(req,res)=>{
    try {
      const {userId} = req.user;
  
      
      const data = await Score.find({userId})
      if(!data){
        return res.status(404).json({message:"No score found"})
      }
      res.status(200).json({data})

      
    } catch (error) {
      res.status(400).json({message:"failed to get score"})
    }
  })





module.exports = router