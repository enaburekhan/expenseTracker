const { body } = require('express-validator');

exports.signupValidator = [
    body('Email')
      .isEmail().withMessage('Invalid email')
      .normalizeEmail(),
    body('Password') 
      .isLength({ min: 6 }).withMessage('Invalid password'), 
    body('FirstName') 
      .isLength({ min: 4 }).withMessage('Name must be at least 4 characters long'),
    body('Username') 
      .isLength({ min: 4 }).withMessage('Username must be at least 4 characters long')     
];

exports.loginValidator = [
    body('Email')
      .isEmail().withMessage('Invalid email')
      .normalizeEmail(),
    body('Password') 
      .isLength({ min: 6 }).withMessage('Invalid password'),     
];

