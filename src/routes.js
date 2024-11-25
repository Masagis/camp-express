const router = require('express').Router();

const booksRoute = require('./api/routes/books.route');

/**
 * api routes
 */
router.use('/api/v1/books', booksRoute);

module.exports = router;