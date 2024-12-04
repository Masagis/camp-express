const router = require('express').Router();

const UsersController = require('../controller/user.controller');
// const AuthMiddle= require('../../middleware/authentication');

// router.use(AuthMiddle)

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for AUTH
 * /users:
 *   get:
 *     summary: by id
 *     tags: [Auth]
 *     description: blabla
 *     responses:
 *       200:
 *         description: A single user.
 *       400:
 *         description: A single user.
 *       404:
 *         description: A single user.
 *       500:
 *         description: A single user.
*/
router.get('/users', UsersController.getUsers);

module.exports = router;