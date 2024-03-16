const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../services/db');
const { validationResult } = require('express-validator');


exports.signup = async (req, res, next) => {
  try{
    // Generate salt
    const salt = bcrypt.genSaltSync(12)

    // Hash password with the generated salt
    const hashedPassword = bcrypt.hashSync(req.body.Password, salt)
    // Create user
    const userId = await User.createUser(req.body.Email, hashedPassword, req.body.Username, req.body.FirstName)
    
    // create token
    const token = jwt.sign({userId}, SECRET_KEY, {expiresIn: '2h'})

    // Send back response with cookie
    res.status(200).cookie('token', token, {httpOnly: true}).json({ message: 'User Created'})

  }catch(error){
    console.error(error);
    res.status(500).json({ error: 'Server Error'})
  }
}


exports.login = async (req, res, next) => {
  try{
    // validation error handling
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(422).json({ errors: errors.array() })
    }

    // Fetch user by email
    const user = await User.getUserByEmail(req.body.Email);
    if(!user){
      return res.status(401).json({ errors: 'Invalid credentials'});
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(req.body.Password, user.Password);
    if(!isPasswordValid){
      return res.status(401).json({ error: 'Invalid credentials'})
    }

    // Generate access token
    const accessToken = jwt.sign({ userId: user.UserID}, SECRET_KEY, { expiresIn: '2h'})

    // Respond with token
    res.status(200).json({ accessToken})
  }catch(error){
      console.error(error)
      res.status(500).json({ error: 'Server Error'})
  }

}

