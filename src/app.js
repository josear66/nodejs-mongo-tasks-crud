import express from 'express'
import router from './routes/taskRoute'
import {engine} from 'express-handlebars'
import path from 'path'
import morgan from 'morgan'

//Initialization
const app = express()
import './database'

//Settings
app.set('port', process.env.PORT || 3000)

//Plantilla handlebars
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine ({
  layoutsDir : path.join(app.get('views'), 'layouts'),
  defaultLayout : 'main',
  extname : '.hbs'
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routings
app.use(router)

export default app

