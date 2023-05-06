const express = require("express");
const cors = require('cors');
const app = express();
const pool = require('./db');
const bcrypt = require("bcrypt");

//middleware
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000;

// User Login
app.post("/signin", async (req, res)=>{
    const { email, password } = req.body;
    try{
        const checkUser = await pool.query("SELECT * FROM USERS WHERE EMAIL = $1", [email]);
        console.log(checkUser.rows);
    }catch(err){
        console.error(err);
    }
})

// Register User
app.post("/signup", async (req, res)=>{
    const {fullName, mobileNum, email, setPassword} = req.body;
    try{   
        let hashedPassword = await bcrypt.hash(setPassword, 10);
       const addUser = await pool.query("INSERT INTO USERS (NAME, MOBILE_NUMBER, EMAIL, PASSWORD) VALUES ($1, $2, $3, $4)", [fullName, mobileNum, email, hashedPassword]);
       res.json("User added to the database");
    }catch(error){
        console.error("This is the error: ",error);
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})