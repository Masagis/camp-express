const router = require('express').Router();

const BookController = require('../controller/book.controller');

router.get('/', BookController.getBooks);
router.get('/:id', BookController.getBooksById);

module.exports = router;