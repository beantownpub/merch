var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var pages = config.pages
const kafka = require('../utils/kafka')

const PRODUCER = kafka.brokers.producer()


router.use(function (req, res, next) {
  next()
})

router.post('/event', function(req, res, next) {
  kafka.sendToStream(PRODUCER, 'clicks', 'events', req.body)
  res.sendStatus(200)
})

router.get('/', function(req, res, next) {
  const home = pages.index
  res.render("main", home.metadata)
})

router.get('/index.html', function(req, res, next) {
  res.redirect('/')
})

router.get('/about.html', function(req, res, next) {
  res.redirect('/about')
})

router.get('/menu.html', function(req, res, next) {
  res.redirect('/menu')
})

router.get('/events.html', function(req, res, next) {
  res.redirect('/parties')
})

router.get('/healthz', function(req, res, next) {
  res.sendStatus('ok')
})

router.get('/:section', function(req, res, next) {
  const page = pages[req.params['section']]
  if (page) {
    res.render("main", page.metadata)
  } else {
    res.render("main", pages["error"]["metadata"])
    // res.sendStatus(404)
  }
})

module.exports = router
