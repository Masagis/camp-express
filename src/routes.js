const router = require('express').Router();

const booksRoute = require('./api/routes/books.route');
const usersRoute = require('./api/routes/users.route');
const auth = require('./api/routes/auth.route');

/**
 * api routes
 */
router.use('/api/v1/books', booksRoute);
router.use('/api/v1/users', usersRoute);
router.use('/api/v1', auth);

module.exports = router;