const BookService = require('../../services/booksService')
const bookValidations = require('../../validations/books')

exports.getBooks = async (req, res, next) => {
  try {
    const bookService = new BookService()
    const { page = 1, limit = 10 } = req.query
    const { data, meta } = await bookService.getBooks({
      page: parseInt(page),
      limit: parseInt(limit),
    })

    return res.status(200).json({
      success: true,
      message: 'Get data success',
      data,
      meta,
    })
  } catch (error) {
    next(error)
  }
}

exports.getBooksById = async (req, res, next) => {
  try {
    const bookService = new BookService()
    const { id } = req.params
    const { data } = await bookService.getBooksById(parseInt(id))

    return res.status(200).json({
      success: true,
      message: 'Get book detail success',
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.createBooks = async (req, res, next) => {
  try {
    bookValidations.validateCreatePayload(req.body)
    const bookService = new BookService()
    const data = await bookService.createBooks(
      req.body.name,
      req.body.sinopsis,
      req.body.year,
    )

    return res.status(201).json({
      success: true,
      message: 'Create data success',
      data,
    })
  } catch (error) {
    next(error)
  }
}