var createError = require('http-errors')
const bodyParser = require('body-parser')
var compression = require('compression')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
// var sassMiddleware = require('node-sass-middleware')
var session = require('express-session')
var indexRouter = require('./routes/index')
var merchRouter = require('./routes/merch')
var contactRouter = require('./routes/contact')
var menuRouter = require('./routes/menu')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
var app = express()

let redisClient = redis.createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

const { v4: uuidv4 } = require('uuid')
const logLevel = process.env.LOG_LEVEL || 'tiny'

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
if (process.env.NODE_ENV === "development") {
  app.use(logger(logLevel))
} else {
  app.use(logger(logLevel, {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(sassMiddleware({
//   src: path.join(__dirname, '../dist/public'),
//   dest: path.join(__dirname, '../dist/public'),
//   indentedSyntax: true, // true = .sass and false = .scss
//   sourceMap: false
// }))
app.use(session({
  genid: function(req) {
    return uuidv4() // use UUIDs for session IDs
  },
	secret: process.env.SESSION_SECRET || 'secret',
	resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 6000000, path: '/merch/cart' },
  name: "cartId",
  store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
}))
app.use(express.static(path.join(__dirname, '../dist/public')))
// app.use(express.static(staticUrl));

const urlRoot = process.env.NODE_JAL_URL_ROOT || '/'

app.use(urlRoot, indexRouter)
app.use(urlRoot + 'merch', merchRouter)
app.use(urlRoot + 'contact', contactRouter)
app.use(urlRoot + 'menu', menuRouter)
// app.use(urlRoot + 'cart', cartRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
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

module.exports = app
