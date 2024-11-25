const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

const routers = require('./routes');

/**
 * logger
*/
app.use(morgan('combined'))

/**
 * cors
*/
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * routing
 */
app.use(routers);

/**
 * server
 */
app.listen(port, () => {
  console.log(`Server ready listening on https://localhost:${port}`)
})
