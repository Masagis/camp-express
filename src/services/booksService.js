const { Books } = require('../models')

// const db = require('../models')
// const { QueryTypes } = require('sequelize')

class BookService {
  async getBooks({ page, limit } = { page: 1, limit: 10 }) {
    const queryParams = {
      offset: (page - 1) * limit,
      limit: limit,
    }

    const countBooks = await Books.count()
    const totalPage = Math.ceil(countBooks / limit) || parseInt(page)

    // const books = await db.sequelize.query('SELECT * FROM books', {
    //   type: QueryTypes.SELECT,
    // }, queryParams)
    // return {
    //   data: books,
    //   meta: {
    //     page: parseInt(page),
    //     totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
    //     totalData: countBooks,
    //     totalDataOnPage: books.length,
    //   },
    // }

    const books = await Books.findAll(queryParams)

    return {
      data: books,
      meta: {
        page: parseInt(page),
        totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
        totalData: countBooks,
        totalDataOnPage: books.length,
      },
    }
  }

  async getBooksById(id) {
    const booksId = await Books.findByPk(id)
    console.log(booksId, "booksId")
    if (!booksId) return response.status(404).json({ message: 'Data not found' })

    return { data: booksId }
  }
}

module.exports = BookService
