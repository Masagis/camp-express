// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3001

// app.get('/hello', (req, res) => {
//   res.send("hello world")
// })
// app.post('/helloo', (req, res) => {
//   res.send("you just called the post method at '/hello'! \n")
// })

// app.listen(port, () => {
//   console.log(`Running away on ${port}`)
// })

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Get routes on blogs")
})
router.post('/', (req, res) => {
  res.send("Post routes on blog")
})

// export this router to use in our index.js
module.exports = router

