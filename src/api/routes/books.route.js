const router = require('express').Router();

const BookController = require('../controller/book.controller');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for Books
 * /books:
 *   get:
 *     summary: get data all books
 *     tags: [Books]
 *     description: get data all books
 *     responses:
 *       200:
 *         description: simple.
 * 
*/
router.get('/books', BookController.getBooks);
/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: get data books by id
 *     tags: [Books]
 *     description: get data books by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: simple.
*/
router.get('/books/:id', BookController.getBooksById);
/**
 * @swagger
 * /books:
 *   post:
 *     summary: by id
 *     tags: [Books]
 *     description: blabla
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne
 *               sinopsis:
 *                 type: string
 *                 description: The user's name.
 *                 example: example@gmail.com
 *     responses:
 *       200:
 *         description: A single user.
*/
router.post('/books', BookController.createBooks);
/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: by id
 *     tags: [Books]
 *     description: blabla
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne
 *               sinopsis:
 *                 type: string
 *                 description: The user's name.
 *     responses:
 *       200:
 *         description: A single user.
 * 
*/
router.put('/books/:id', BookController.updateBooksById);
/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: by id
 *     tags: [Books]
 *     description: blabla
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
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
router.delete('/books/:id', BookController.deleteBooksById);

module.exports = router;