// const express = require('express')

// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.send({
//     message: 'Hallo 👋',
//     status: 'Server ready 🚀',
//   })
// })

// app.listen(port, () => {
//   console.log(`Server ready listening on port ${port}`)
// })


const express = require('express')
const app = express()
const port = process.env.PORT || 3001

// const blogs = require('./blog.js')

// app.use('/blog', blogs)

// app.get('/hello', (req, res) => {
//   res.send("hello world")
// })
// app.post('/helloo', (req, res) => {
//   res.send("you just called the post method at '/hello'! \n")
// })

app.get('/blog/:title/:id',(req,res) =>{
  res.send("id:"+ req.params.id + " and title: " + req.params.title)
})

app.listen(port, () => {
  console.log(`Running away on ${port}`)
})

