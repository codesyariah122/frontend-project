import express from 'express'

import path, {dirname} from 'path'

import {fileURLToPath} from 'url'

import {webRouter} from './router.js'

import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static('public/assets'))

app.set('views', path.join(__dirname, 'public/pages'))

app.set('view engine', 'pug')

webRouter(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})