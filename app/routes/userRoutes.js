const express = require('express');
const { signupValidator, loginValidator } = require('../validators/userValidator');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupValidator, UserController.signup);
router.post('/login', loginValidator, UserController.login);

module.exports = router;