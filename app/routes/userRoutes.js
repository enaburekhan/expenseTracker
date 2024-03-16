const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const { signup, login } = require('../controllers/userController')
const User = require('../models/userModel');
const bcrypt = require('bcrypt')


router.post('/signup', [
   body('Email').isEmail().withMessage('Please enter a valid email').custom(async (value) => {
     const foundUser = await User.getUserByEmail(value);
     if(foundUser){
        return Promise.reject('User already exist')
     }
   }), 
   body('Password').notEmpty().withMessage("Password field can't be empty")
], 
signup
);

router.post('/login', [
  body('Email').isEmail().withMessage('Please enter a valid email'),
  body('Password').notEmpty().withMessage("Password field can't be empty")
], login)

module.exports = router;