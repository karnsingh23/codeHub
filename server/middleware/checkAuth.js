const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();


const jwtAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

     
        const decoded = jwt.verify(token, process.env.JWT);
        
       
        req.user = decoded;
        
        next(); 
    } catch (err) {
       
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

module.exports = jwtAuth;
