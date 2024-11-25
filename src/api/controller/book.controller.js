const BookService = require('../../services/booksService')

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
