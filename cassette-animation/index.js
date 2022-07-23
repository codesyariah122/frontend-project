const express = require('express')

const path = require('path')

const dotenv = require('dotenv').config()

const port = process.env.PORT

const routes = require('./public/index.js')

const app = express()

app.use(express.static('public/assets'))

app.set('views', path.join(__dirname, 'public/pages'))

app.set('view engine', 'ejs')

routes(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})