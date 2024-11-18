const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3001


app.use(morgan('combined'))

//custom logger
// app.use(morgan(function(tokens, req, res){
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'
//   ].join(' ')
// }))

app.get('/', (req, res) => {
  res.send({
    message: 'Hallo 👋',
    status: 'Server ready 🚀',
  })
})

//route handler that sends the response
app.get('/blog', (req, res) => {
  res.send("hello world, blog")
})

app.listen(port, () => {
  console.log(`Server ready listening on https://localhost:${port}`)
})

// const blogs = require('./blog.js')

// app.use('/blog', blogs)

// app.get('/hello', (req, res) => {
//   res.send("hello world")
// })
// app.post('/helloo', (req, res) => {
//   res.send("you just called the post method at '/hello'! \n")
// })

// app.get('/blog/:title/:id',(req,res) =>{
//   res.send("id:"+ req.params.id + " and title: " + req.params.title)
// })

// middleware function to log request protocol
// app.use('/blog', (req, res, next) => {
//   console.log("A request for blogs received at", + Date.now())
//   next()
// })
