const router = require('express').Router();

const AuthController = require('../controller/authentication.controller');

router.post('/auth/signup', AuthController.signup);
router.post('/auth/signin', AuthController.signin);

module.exports = router;