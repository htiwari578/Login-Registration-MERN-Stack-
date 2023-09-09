const express = require('express');


const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser= require("cookie-parser");
const UserModel = require('./models/user');
const mongoose = require('mongoose');

const app = express();
app.use(cors({
  origin: ["http://localhost:5174"],
  methods: ["GET" ,"POST"],
  credentials: true
}));
app.use(cookieParser())
app.use(express.json());


const mongoDBURI='mongodb+srv://htiwari578:Coder123@cluster0.mzhs024.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
  
app.post('/login', (req,res) => {
  const {email, password} = req.body;
  UserModel.findOne({email:email})
  .then(user => {
    if(user) {
      bcrypt.compare(password, user.password, (err , response) => {
        if(response){
          const jwt = jwt.sign({email: user.email, role: user.role},
           "jwt-secret-key",{expiresIn : '1d'} )
           res.cookie('token', token)
           return res.json("Success")

        }else{
          return res.json("passowrd is incorrect")
        }
      })


    }else{
      return res.json("No record existed")
    }
  })
})
app.post('/register', (req, res) => {
      const {name, email, password} = req.body;
      bcrypt.hash(password, 10)
      .then(hash => {
        UserModel.create({name,email,password:hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))
      }).catch(err => res.json(err))
})


app.listen(3005, ()=> {
    console.log("server is running");
});



