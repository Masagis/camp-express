const router = require('express').Router();
const authController = require('../controller/authentication.controller')

router.post('/auth/signup', authController.signup)
router.post('/auth/signin', authController.signin)

module.exports = router