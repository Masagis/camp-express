const UserServices = require('../../services/usersServices')

exports.getUsers = async (req, res, next) => {
  try {
    const kontol = new UserServices()
    const { page = 1, limit = 10 } = req.query
    const { data, meta } = await kontol.getUsers({
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
