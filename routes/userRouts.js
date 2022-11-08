const express = require('express');
const { model } = require('mongoose');
const router = express.Router()
const user = require('../controller/userController')
const validation = require('../validation/users/user_validation')

router.post('/registerUser',validation.registerUserValidation,user.userSignup)

module.exports = router;