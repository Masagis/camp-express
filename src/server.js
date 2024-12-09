const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()
const port = process.env.PORT || 3001

const routers = require('./routes')

/**
 * logger
 */
app.use(morgan('combined'))

/**
 * cors
 */
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * routing
 */
app.use(routers)

/**
 * swagger
 */
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description:
        'This is a simple CRUD API Application made with express and documented with swagger',
    },
    servers: [
      {
        url: 'http://localhost:3001/api/v1',
        description: 'Development server',
      },
      {
        url: 'http://localhost:5050/api/v1',
        description: 'serve 2',
      },
    ],
  },
  apis: ['./src/api/routes/*.js'],
}

const swaggerSpecification = swaggerJsdoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification))

/**
 * server
 */
app.get('/', (req, res) => {
  res.send({
    message: 'Hello 👋',
    status: 'Server ready 🚀',
  })
})
app.listen(port, () => {
  console.log(`Server ready listening on http://localhost:${port}`)
})
