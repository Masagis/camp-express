const router = require('express').Router();

const booksRoute = require('./api/routes/books.route');
const usersRoute = require('./api/routes/users.route');
const authRoute = require('./api/routes/auth.route');

/**
 * api routes
 */
router.use('/api/v1', booksRoute);
router.use('/api/v1', usersRoute);
router.use('/api/v1', authRoute);

module.exports = router;