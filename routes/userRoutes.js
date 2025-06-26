
const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require('../controllers/userController');

// POST /api/users/register - Register a new user
router.post('/register', registerUser);

// POST /api/users/login - Log in a user
router.post('/login', loginUser);

module.exports = router;
