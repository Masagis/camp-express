const router = require('express').Router();

const booksRoute = require('./api/routes/books.route');
const usersRoute = require('./api/routes/users.route');

/**
 * api routes
 */
router.use('/api/v1/books', booksRoute);
router.use('/api/v1/users', usersRoute);

module.exports = router;