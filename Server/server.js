const express = require("express");
const cors = require('cors');
const app = express();
// const pool = require('./db');

//middleware
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000;

// User Login
app.post("/signin", (req, res)=>{
    const { email, password } = req.body;
    try{
        console.log({
            email: email,
            password: password
        })
        
    }catch(err){
        console.error(err);
    }
})

// Register User
app.post("/signup", (req, res)=>{
    const {fullName, mobileNum, email, setPassword, confirmPassword} = req.body;
    try{
        console.log({
            name: fullName,
            mobile: mobileNum,
            email: email,
            password: setPassword,
            confirmPassword: confirmPassword
        });
            
       
    }catch(err){
        console.error(err);
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})