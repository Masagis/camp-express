const router = require('express').Router();

const UsersController = require('../controller/user.controller');

router.get('/', UsersController.getUsers);

module.exports = router;