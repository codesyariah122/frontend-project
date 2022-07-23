import express from 'express'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import {webRouter} from './router.js'
import dotenv from 'dotenv'
import exphbs from 'express-handlebars'
import hbsHelper from './helpers/hbsHelper.js'

dotenv.config()

const app = express()

const port = process.env.PORT

const __dirname = dirname(fileURLToPath(import.meta.url))

app.engine('hbs', exphbs.engine({
	defaultLayout: 'main',
	extname: 'hbs',
	helpers: hbsHelper
}))

app.use(express.static('public/assets'))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'hbs')

webRouter(app)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})