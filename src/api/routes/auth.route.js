const router = require('express').Router();

const AuthController = require('../controller/authentication.controller');

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

module.exports = router;