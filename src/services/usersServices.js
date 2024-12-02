const { Users } = require('../models')
const db = require('../models')
const { QueryTypes } = require('sequelize')

class UsersService {
  async getApa({ page, limit } = { page: 1, limit: 10 }) {
    const queryParams = {
      offset: (page - 1) * limit,
      limit: limit,
    }

    const countUsers = await Users.count()
    const totalPage = Math.ceil(countUsers / limit) || parseInt(page)

    const user = await db.sequelize.query('SELECT * FROM users', {
      type: QueryTypes.SELECT,
    }, queryParams)
    return {
      data: user,
      meta: {
        page: parseInt(page),
        totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
        totalData: countUsers,
        totalDataOnPage: user.length,
      },
    }

  //   const users = await Users.findAll(queryParams)
  //   return {
  //     data: users,
  //     meta: {
  //       page: parseInt(page),
  //       totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
  //       totalData: countUsers,
  //       totalDataOnPage: Users.length,
  //     },
  //   }
  }
}

module.exports = UsersService