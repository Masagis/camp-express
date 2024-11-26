const router = require('express').Router();

const BookController = require('../controller/book.controller');

router.get('/', BookController.getBooks);
router.get('/:id', BookController.getBooksById);
router.post('/', BookController.createBooks);
router.put('/:id', BookController.updateBooksById);
router.delete('/:id', BookController.deleteBooksById);

module.exports = router;