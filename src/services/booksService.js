const { where } = require('sequelize')
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

    if (!booksId)
      return response.status(404).json({ message: 'Data not found' })

    return { data: booksId }
  }

  async createBooks(name, sinopsis) {
    const books = await Books.create({ name, sinopsis })
    return books
  }

  async updateBooksById(id, name, sinopsis) {
    const booksId = await Books.findByPk(id)

    if (!booksId)
      return response.status(404).json({ message: 'Data not found' })

    return await Books.update(
      { name, sinopsis },
      {
        where: {
          id,
        },
      },
    )
  }

  async deleteBooksById(id) {
    const booksId = await Books.findByPk(id)

    if (!booksId)
      return response.status(404).json({ message: 'Data not found' })

    return await Books.destroy({
      where: {
        id,
      },
    })
  }
}

module.exports = BookService
