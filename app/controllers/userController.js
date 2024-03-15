const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { SECRET_KEY } = require('../services/db');

// const router = express.Router();

class UserController {
  static async signup(req, res) {
    // input validation
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }
    const { Email, Password, Username, FirstName } = req.body;

    try {
      // check if the user already exists
      const existingUser = await userModel.getUserByEmail(Email);
      if (existingUser){
        return res.status(400).json({ error: 'User already exists'})
      }
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);

      // Create a new user
      const userId = await userModel.createUser(Email, hashedPassword, Username, FirstName);

      // Respond with success
      res.status(201).json({ message: 'User signed up successfully', userId})
    }catch (err){
       console.error(err);
       res.status(500).json({ error: 'Server error' })
    }
  }

  static async login(req, res) {
    // Input validation
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { Email, Password } = req.body;
    try{
      // Fetch the user from the database
      const user = await UserModel.getUserByEmail(Email);
      if(!user){
        return res.status(401).json({ error: 'Invalid credentials'})
      }

      // Check if the password matches
      const isPasswordValid = await bcrypt.compare(Password, user.Password);
      if(!isPasswordValid){
        return res.status(401).json({ error: 'Invalid credentials'})
      }

      // Generate access token
      const accessToken = jwt.sign( { userId: user.id}, SECRET_KEY, { expiresIn: '15m'})

      // Generate refresh token (can also be saved in the database)
      const refreshToken = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '7d'})


      // Respond with tokens
      res.status(200).json({ accessToken, refreshToken})

    }catch(err){
      console.error(err);
      res.status(500).json({ error: 'Server Error'})
    }
  }
}



// router.get('/', async (req, res, next) => {
//   try {
//     const users = await userModel.getUsers();
//     res.render('users', { title: 'User List', users });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = UserController;
// module.exports = router;
