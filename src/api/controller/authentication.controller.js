const db = require('../../models')
const User = db.Users
const passwordUtil = require('../../utils/password.util')
const tokenUtil = require('../../utils/token.util')


const signup = async (request, response) => {
  await User.create({
    nama: request.body.nama,
    email: request.body.email,
    password: await passwordUtil.encrypt(request.body.password)
  })

  return response.status(201).json({ message: 'User registered successfully.' })
}

const signin = async (request, response) => {
  const user = await User.findOne({ where: { email: request.body.email }})

  if (!user) return response.status(401).json('User not already register.')

  const checkUser = await passwordUtil.compare(request.body.password, user.password)

  if (!checkUser) return response.status(401).json({ message: 'Unauthorized acess. Check your account.' })

  // Generate token nya
  const token = await tokenUtil.encode(user)

  return response.json({ token: token })
}

module.exports = { signup,signin }