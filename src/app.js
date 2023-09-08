import HttpError from 'http-errors'
import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import session from 'express-session'
import redis from 'redis'
import redisStore from 'connect-redis'
import { fileURLToPath } from 'url'
import * as uuid from 'uuid'
import * as indexRouter from './routes/index.js'
import * as contactRouter from './routes/contact.js'
import * as menuRouter from './routes/menu.js'
import * as merchRouter from './routes/merch.js'

const redisSession = redisStore(session)
const app = express()

let redisClient = redis.createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

const { v4: uuidv4 } = uuid.v4
const logLevel = process.env.LOG_LEVEL || 'dev'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
if (process.env.NODE_ENV === "development") {
  app.use(morgan(logLevel))
} else {
  app.use(morgan(logLevel, {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  genid: function(req) {
    return uuidv4() // use UUIDs for session IDs
  },
	secret: process.env.SESSION_SECRET || 'secret',
	resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 6000000, path: '/merch/cart' },
  name: "cartId",
  store: new redisSession({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
}))
app.use(express.static(path.join(__dirname, '../dist/public')))

const urlRoot = process.env.NODE_JAL_URL_ROOT || '/'

app.use(urlRoot, indexRouter.default)
app.use(urlRoot + 'merch', merchRouter.default)
app.use(urlRoot + 'contact', contactRouter.default)
app.use(urlRoot + 'menu', menuRouter.default)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(HttpError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  console.log(`ERROR status: ${err.status} | path: ${req.path}`)
  res.redirect('/error')
})

export default app
