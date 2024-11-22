// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// const port = process.env.PORT || 3001

// app.use(morgan('combined'))

// //custom logger
// // app.use(morgan(function(tokens, req, res){
// //   return [
// //     tokens.method(req, res),
// //     tokens.url(req, res),
// //     tokens.status(req, res),
// //     tokens.res(req, res, 'content-length'), '-',
// //     tokens['response-time'](req, res), 'ms'
// //   ].join(' ')
// // }))

// app.get('/', (req, res) => {
//   res.send({
//     message: 'Hallo 👋',
//     status: 'Server ready 🚀',
//   })
// })

// //route handler that sends the response
// app.get('/blog', (req, res) => {
//   res.send("hello world, blog")
// })

// app.listen(port, () => {
//   console.log(`Server ready listening on https://localhost:${port}`)
// })

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

const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3001

const { Books } = require('./models')
const { Film } = require('./models')

const db = require('./models')
const { QueryTypes } = require('sequelize')

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send({
    message: 'Hallo 👋',
    status: 'Server ready 🚀',
  })
})

// Contoh endpoint untuk mendapatkan semua data
app.get('/api/v1/books', async (request, response) => {
  try {
    const books = await Books.findAll()
    response.json({ status: 'OK', data: books })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }

  // const books = await db.sequelize.query('SELECT * FROM books', { type: QueryTypes.SELECT });
  // return response.json({status: 'OK', data: books})

  // const { query } = request;
  // const books = await db.sequelize.query(`SELECT * FROM books WHERE name LIKE '%${query.name}%'`, { type: QueryTypes.SELECT });
  // return response.json({status: 'OK', data: books})

  // const { query } = request;

  // const page = parseInt(query.page) || 1;
  // const limit = parseInt(query.limit) || 10;

  // const queryParams = {
  //   offset: (page - 1) * limit,
  //   limit: limit
  // };

  // const books = await Books.findAll(queryParams)

  // const countBooks = await Books.count()
  // const totalPage = Math.ceil(countBooks / limit) || parseInt(page);

  // return response.json({
  //   status: 200,
  //   message: "get data succesfully",
  //   data: books,
  //   meta: {
  //     page: parseInt(page),
  //     totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
  //     totalData: countBooks,
  //     totalDataOnPage: books.length,
  //   }
  // })
})

app.get('/api/v1/books/:id', async (request, response) => {
  // const books = await db.sequelize.query('SELECT * FROM books WHERE id = :id', {
  //   replacements: { id: request.params.id }, type: QueryTypes.SELECT });
  //   if (books.length === 0) {
  //     return response.status(404).json({message: 'Data not found'})
  //   }
  // return response.json({status:"OK", data: books})

  // if(request.query.id) {
  //      books = Books.findByPk(request.params.id, {where: {
  // 			id: request.query.id,
  // 		},})
  //   } else {
  //      books = await Books.findAll()
  //   }

  const booksId = await Books.findByPk(request.params.id)
  if (!booksId) return response.status(404).json({ message: 'Data not found' })

  return response.json({ status: 'OK', data: booksId })
})

app.get('/api/v1/film', async (req, res) => {
  try {
    const film = await Film.findAll()
    res.json({ status: 'OK', data: film })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Server ready listening on https://localhost:${port}`)
})
