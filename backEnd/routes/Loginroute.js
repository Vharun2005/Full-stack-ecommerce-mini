const express = require('express')
const { LoginUser, SignupUser, validateUser } = require('../controlers/loginControler')
const router = express.Router()

router.route('/login').post(LoginUser)
router.route('/signup').post(SignupUser)
router.route('/validuser').post(validateUser)


module.exports = router


